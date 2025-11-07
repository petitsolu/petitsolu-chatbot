import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

let chat: Chat | null = null;

// Fix: Use process.env.API_KEY exclusively as per guidelines, resolving property 'env' not existing on ImportMeta. This also removes the need for vite/client types.
// The API key is retrieved from the environment variables.
// It's assumed to be configured in the deployment environment.
const API_KEY = process.env.API_KEY;

/**
 * Retrieves the current chat session or initializes a new one.
 * @returns The active Chat instance.
 */
function getChat(): Chat {
  if (!chat) {
    if (!API_KEY) {
      // Fix: Updated error message to reflect usage of process.env.API_KEY.
      // This error will now only trigger if the key is missing in the environment.
      throw new Error("La clé API est manquante. Assurez-vous que la variable d'environnement API_KEY est configurée.");
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
        // This is our own error if the environment variable wasn't found
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
