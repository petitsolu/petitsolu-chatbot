
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { ListenLaterPanel } from './components/ListenLaterPanel';
import { NewChatIcon, ListenLaterIcon, GuestsIcon, NewsletterIcon, LinkedInIcon, LogoIcon, MenuIcon, LinkIcon } from './components/icons';
import { useListenLater } from './hooks/useListenLater';
import { getResponse, startNewConversation as resetGeminiSession } from './services/geminiService';
import { trackEvent } from './services/analyticsService';
import { Message, Role } from './types';
import { FAQ_DATA } from './constants';

const CHAT_STORAGE_KEY = 'petitSolu_chatHistory';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const storedMessages = window.localStorage.getItem(CHAT_STORAGE_KEY);
      if (storedMessages) {
        return JSON.parse(storedMessages);
      }
    } catch (error) {
      console.error("Failed to load chat history from localStorage", error);
    }
    return [
      {
        id: uuidv4(),
        role: Role.ASSISTANT,
        content: "Bonjour ! Je suis PetitSolu, l'assistant IA du podcast Soluble(s). Comment puis-je vous aider aujourd'hui ? Vous pouvez me demander des infos sur un épisode, un invité, ou même me demander une recommandation surprise !",
        suggestions: ['🌍 Environnement', '🤝 Société', '🏡 Vie quotidienne', '🎁 Épisode surprise'],
      },
    ];
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isListenLaterOpen, setIsListenLaterOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const hasSentFirstMessage = useRef(messages.length > 1);

  const { savedEpisodes, addEpisode, removeEpisode, isSaved } = useListenLater();

  useEffect(() => {
    try {
      window.localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error("Failed to save chat history to localStorage", error);
    }
    if (chatContainerRef.current) {
        const lastMessageElement = chatContainerRef.current.lastElementChild as HTMLElement;
        if (lastMessageElement) {
            const lastMessage = messages[messages.length - 1];
            // If the last message is from the assistant and is NOT loading, scroll to its top.
            if (lastMessage?.role === Role.ASSISTANT && !lastMessage.isLoading && lastMessage.content) {
                lastMessageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                // For user messages and loading indicators, scroll to the bottom of the chat.
                lastMessageElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        }
    }
  }, [messages]);

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }

  const handleSendMessage = useCallback(async (input: string, source: 'input' | 'suggestion' = 'input') => {
    if (!input.trim() || isLoading) return;

    if (!hasSentFirstMessage.current) {
      trackEvent('start_chat');
      hasSentFirstMessage.current = true;
    }

    if (source === 'suggestion') {
      trackEvent('click_suggestion', { suggestion_text: input });
    }

    const userMessage: Message = { id: uuidv4(), role: Role.USER, content: input };
    const historyForApi = [...messages.map(m => ({ ...m, suggestions: undefined })), userMessage];

    const loadingMessageId = uuidv4();
    const loadingMessage: Message = { id: loadingMessageId, role: Role.ASSISTANT, content: '', isLoading: true };
    setMessages([...historyForApi, loadingMessage]);
    setIsLoading(true);

    try {
      const responseContent = await getResponse(input, historyForApi);
      const assistantMessage: Message = { id: loadingMessageId, role: Role.ASSISTANT, content: responseContent, isLoading: false };
      setMessages(prev => prev.map(msg => msg.id === loadingMessageId ? assistantMessage : msg));
    } catch (error) {
      const errorMessage: Message = {
        id: loadingMessageId,
        role: Role.ASSISTANT,
        content: error instanceof Error ? error.message : "Une erreur inconnue est survenue.",
        isError: true,
        isLoading: false,
      };
      setMessages(prev => prev.map(msg => msg.id === loadingMessageId ? errorMessage : msg));
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  const handleNewChat = () => {
    trackEvent('new_chat');
    hasSentFirstMessage.current = false;
    resetGeminiSession();
    const initialMessages = [
      {
        id: uuidv4(),
        role: Role.ASSISTANT,
        content: "Conversation réinitialisée ! Je suis prêt pour de nouvelles questions. Comment puis-je vous aider à explorer le podcast Soluble(s) ?",
        suggestions: ['🌍 Environnement', '🤝 Société', '🏡 Vie quotidienne', '🎁 Épisode surprise'],
      },
    ];
    setMessages(initialMessages);
    try {
      window.localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(initialMessages));
    } catch (error) {
       console.error("Failed to clear chat history in localStorage", error);
    }
    closeSidebar();
  };
  
  const handleFaqClick = (question: string) => {
    if (!isLoading) {
      trackEvent('click_faq', { question });
      handleSendMessage(question);
      closeSidebar();
    }
  }

  const handleListenLaterClick = () => {
    trackEvent('open_listen_later');
    setIsListenLaterOpen(true);
    closeSidebar();
  }
  
  const handleSidebarLinkClick = (linkName: string) => {
    trackEvent('click_sidebar_link', { link_name: linkName });
    closeSidebar();
  }

  return (
    <div className="bg-slate-900 text-white h-dvh flex font-sans">
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-30 transition-opacity"
          onClick={closeSidebar}
          aria-hidden="true"
        ></div>
      )}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-slate-950 p-4 flex flex-col gap-4 border-r border-slate-800 z-40
        transform transition-transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:static md:translate-x-0 md:flex-shrink-0
      `}>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <LogoIcon className="w-8 h-8 text-teal-400" />
                <h1 className="text-xl font-bold">Petit Solu</h1>
            </div>
            <button
                onClick={handleNewChat}
                className="p-2 rounded-md hover:bg-slate-800 transition-colors"
                aria-label="Nouvelle conversation"
            >
                <NewChatIcon />
            </button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-2">
            <h2 className="text-sm font-semibold text-slate-400 px-2">Suggestions</h2>
            {FAQ_DATA.slice(0, 4).map((faq, index) => (
                <button
                    key={index}
                    onClick={() => handleFaqClick(faq.question)}
                    disabled={isLoading}
                    className="w-full text-left text-sm p-2 rounded-md bg-slate-800/50 hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {faq.question}
                </button>
            ))}
        </div>
        <div className="space-y-2">
            <button
                onClick={handleListenLaterClick}
                className="relative w-full flex items-center gap-3 p-2 rounded-md hover:bg-slate-800 transition-colors"
            >
                {savedEpisodes.length > 0 && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-950"></span>
                )}
                <ListenLaterIcon />
                <span className="text-sm">Écouter plus tard ({savedEpisodes.length})</span>
            </button>
             <a href="https://csoluble.media/les-solvers/" onClick={() => handleSidebarLinkClick('Les Solvers')} target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-slate-800 transition-colors">
                <GuestsIcon />
                <span className="text-sm">Les Solvers</span>
            </a>
            <a href="https://csoluble.media/explorer-episodes-solubles-podcast/" onClick={() => handleSidebarLinkClick('Explorer sans IA')} target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-slate-800 transition-colors">
                <LinkIcon />
                <span className="text-sm">Explorer sans IA</span>
            </a>
            <a href="https://csoluble.media/link-tree/" onClick={() => handleSidebarLinkClick('Link Tree')} target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-slate-800 transition-colors">
                <LinkIcon />
                <span className="text-sm">Link Tree</span>
            </a>
             <a href="https://www.linkedin.com/in/simon-icard-47766821/" onClick={() => handleSidebarLinkClick('LinkedIn')} target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-slate-800 transition-colors">
                <LinkedInIcon />
                <span className="text-sm">LinkedIn</span>
            </a>
        </div>
      </aside>
      
      <div className="flex-1 flex flex-col min-h-0">
        <header className="md:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800 flex-shrink-0">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 mr-2 -ml-2 text-white" aria-label="Ouvrir le menu">
            <MenuIcon />
          </button>
          <div className="flex items-center gap-2">
              <LogoIcon className="w-6 h-6 text-teal-400" />
              <h1 className="text-lg font-bold">Petit Solu</h1>
          </div>
          <div className="w-10"></div>
        </header>

        <main className="flex-1 flex flex-col min-h-0">
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                onSendMessage={(input) => handleSendMessage(input, 'suggestion')}
                onAddEpisode={addEpisode}
                onRemoveEpisode={removeEpisode}
                isEpisodeSaved={isSaved}
              />
            ))}
          </div>
          <div className="p-4 bg-slate-900/50 border-t border-slate-800">
              <div className="max-w-3xl mx-auto">
                  <ChatInput onSendMessage={(input) => handleSendMessage(input, 'input')} disabled={isLoading} />
                   <p className="text-xs text-center text-slate-500 mt-2">
                      PetitSolu peut commettre des erreurs. Pensez à vérifier les informations importantes.
                  </p>
                  <p className="text-xs text-center text-slate-500 mt-1">
                      Ce chatbot est une IA bêta développée avec l'API Gemini de Google.
                  </p>
              </div>
          </div>
        </main>
      </div>

      <ListenLaterPanel
        isOpen={isListenLaterOpen}
        onClose={() => setIsListenLaterOpen(false)}
        episodes={savedEpisodes}
        onRemove={removeEpisode}
      />
    </div>
  );
};

export default App;
