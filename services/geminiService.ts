import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

let chat: Chat | null = null;

// This robust solution safely checks for the Vite/Netlify key first,
// then falls back to the AI Studio preview key. It works in both environments
// without causing type errors.
const API_KEY = ((import.meta as any)?.env?.VITE_API_KEY || process.env.API_KEY) as string;

/**
 * Retrieves the current chat session or initializes a new one.
 * @returns The active Chat instance.
 */
function getChat(): Chat {
  if (!chat) {
    if (!API_KEY) {
      // This error will now only trigger if the key is missing in both environments.
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
