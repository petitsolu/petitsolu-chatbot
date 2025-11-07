import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

let chat: Chat | null = null;

// Fix: Use process.env.API_KEY as per guidelines, which also resolves the TypeScript error.
const API_KEY = process.env.API_KEY;

/**
 * Retrieves the current chat session or initializes a new one.
 * @returns The active Chat instance.
 */
function getChat(): Chat {
  if (!chat) {
    // The GoogleGenAI constructor will throw an error if the key is invalid or missing,
    // which will be caught by the calling function.
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
  // This check is useful to provide a clear error message instead of a crash.
  // With the corrected API_KEY retrieval above, this should no longer trigger the error.
  if (!API_KEY) {
    throw new Error("Désolé, l'assistant est indisponible en raison d'un problème de configuration. La clé API est manquante.");
  }

  try {
    const chatSession = getChat();
    // Per Gemini API guidelines, `chat.sendMessage` expects an object with a `message` property.
    const result = await chatSession.sendMessage({ message: prompt });
    // Extract text from the response using the .text property as per guidelines.
    return result.text;
  } catch (error) {
    console.error("Error getting response from Gemini:", error);
    chat = null; // Reset chat session on error to allow for a fresh start.
    
    // Provide a more specific error message if it's likely an API key issue.
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
