import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

let chat: Chat | null = null;

// FIX: Aligned API key retrieval with @google/genai guidelines.
// The API key must be obtained exclusively from `process.env.API_KEY`.
// This also resolves the TypeScript error on `import.meta.env`.
const API_KEY = process.env.API_KEY;

/**
 * Retrieves the current chat session or initializes a new one.
 * @returns The active Chat instance.
 * @throws An error if the API key is missing.
 */
function getChat(): Chat {
  if (!chat) {
    // This is the essential safety net. If the key isn't found, this will trigger.
    if (!API_KEY) {
      throw new Error("Désolé, l'assistant est indisponible en raison d'un problème de configuration. La clé API est manquante.");
    }
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    chat = ai.chats.create({
      model: 'gemini-flash-lite-latest',
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });
  }
  return chat;
}

/**
 * Sends a prompt to the Gemini API and returns the text response.
 * @param prompt The user's message.
 * @returns The assistant's response.
 */
export async function getResponse(prompt: string): Promise<string> {
  try {
    const chatSession = getChat();
    const result = await chatSession.sendMessage({ message: prompt });
    return result.text;
  } catch (error) {
    console.error("Error getting response from Gemini:", error);
    chat = null; // Reset chat session on error to allow for a fresh start.
    
    // If the error was thrown by our getChat() function (missing key), re-throw it directly.
    if (error instanceof Error && error.message.includes("La clé API est manquante")) {
        throw error;
    }

    // Provide a more specific error message if it's likely an API key issue from Google.
    if (error instanceof Error && (error.message.includes('API key not valid') || error.message.includes('PERMISSION_DENIED'))) {
        throw new Error("La clé API semble invalide ou ne dispose pas des autorisations nécessaires. Veuillez vérifier sa configuration.");
    }
    throw new Error("Désolé, une erreur est survenue lors de la communication avec l'assistant. Veuillez réessayer.");
  }
}

/**
 * Resets the current chat session.
 */
export function startNewConversation(): void {
  chat = null;
}
