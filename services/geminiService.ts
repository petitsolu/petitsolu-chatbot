import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

let chat: Chat | null = null;

// Fix: Adhering to the @google/genai coding guidelines, the API key is now sourced exclusively from `process.env.API_KEY`.
// This resolves the TypeScript error with `import.meta.env` and ensures compliance.
// It's assumed that the execution environment (including Vite/Netlify) is configured to make `process.env.API_KEY` available.
const API_KEY = process.env.API_KEY as string;


/**
 * Retrieves the current chat session or initializes a new one.
 * @returns The active Chat instance.
 */
function getChat(): Chat {
  if (!chat) {
    if (!API_KEY) {
      // Fix: Updated error message to be generic and not reference a specific environment variable implementation.
      throw new Error("La clé API est manquante. Assurez-vous qu'elle est configurée dans l'environnement.");
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
    
    if (error instanceof Error) {
        // This is the error Google's API returns for an invalid or restricted key
        if (error.message.includes('API key not valid') || error.message.includes('PERMISSION_DENIED')) {
            return "La clé API semble invalide ou ne dispose pas des autorisations nécessaires. Veuillez vérifier sa configuration.";
        }
        // This is our own error if the environment variable wasn't found in either environment
        if (error.message.includes('La clé API est manquante')) {
            return "Désolé, l'assistant est indisponible en raison d'un problème de configuration. La clé API est manquante.";
        }
    }

    return "Désolé, une erreur est survenue lors de la communication avec l'assistant. Veuillez réessayer.";
  }
}

/**
 * Resets the current chat session.
 */
export function startNewConversation(): void {
  chat = null;
}
