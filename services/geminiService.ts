import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

let chat: Chat | null = null;

// This is the key change:
// It first looks for the Netlify environment variable (`VITE_API_KEY`).
// If it's not found, it falls back to the AI Studio preview variable (`API_KEY`).
// This makes the code work in BOTH environments.
const API_KEY = (import.meta.env.VITE_API_KEY || process.env.API_KEY) as string;

/**
 * Retrieves the current chat session or initializes a new one.
 * @returns The active Chat instance.
 */
function getChat(): Chat {
  if (!chat) {
    if (!API_KEY) {
      // This error will now only trigger if the key is missing in both environments.
      throw new Error("La clé API est manquante. Assurez-vous que VITE_API_KEY est configurée sur votre plateforme de déploiement.");
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
    
    // Provide a user-friendly error message for API key issues or other problems.
    if (error instanceof Error && (error.message.includes('API key not valid') || error.message.includes('PERMISSION_DENIED'))) {
        return "La clé API semble invalide ou ne dispose pas des autorisations nécessaires. Veuillez vérifier sa configuration.";
    }
    
    // Display a clear error message if the key is missing from both environments.
    if (error instanceof Error && error.message.includes('La clé API est manquante')) {
        return "Désolé, l'assistant est indisponible en raison d'un problème de configuration. La clé API est manquante.";
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
