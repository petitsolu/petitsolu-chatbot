import React, { useState, useEffect, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { ListenLaterPanel } from './components/ListenLaterPanel';
import { NewChatIcon, ListenLaterIcon, GuestsIcon, NewsletterIcon, LinkedInIcon, LogoIcon } from './components/icons';
import { useListenLater } from './hooks/useListenLater';
import { getResponse, startNewConversation } from './services/geminiService';
import { trackEvent } from './services/analyticsService';
import { Message, Role } from './types';
import { FAQ_DATA } from './constants';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListenLaterOpen, setIsListenLaterOpen] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const hasSentFirstMessage = useRef(false);

  const { savedEpisodes, addEpisode, removeEpisode, isSaved } = useListenLater();

  useEffect(() => {
    setMessages([
      {
        id: uuidv4(),
        role: Role.ASSISTANT,
        content: "Bonjour ! Je suis PetitSolu, l'assistant IA du podcast Soluble(s). Comment puis-je vous aider aujourd'hui ? Vous pouvez me demander des infos sur un épisode, un invité, ou même me demander une recommandation surprise !",
        suggestions: ['🌍 Environnement', '🤝 Société', '🏡 Vie quotidienne', '🎁 Épisode surprise'],
      },
    ]);
    startNewConversation();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = useCallback(async (input: string, source: 'input' | 'suggestion' = 'input') => {
    if (!input.trim()) return;

    if (!hasSentFirstMessage.current) {
      trackEvent('start_chat');
      hasSentFirstMessage.current = true;
    }

    if (source === 'suggestion') {
      trackEvent('click_suggestion', { suggestion_text: input });
    }

    // Remove suggestions from previous messages to keep UI clean
    setMessages(prev => prev.map(m => ({ ...m, suggestions: undefined })));

    const userMessage: Message = { id: uuidv4(), role: Role.USER, content: input };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    const loadingMessageId = uuidv4();
    const loadingMessage: Message = { id: loadingMessageId, role: Role.ASSISTANT, content: '', isLoading: true };
    setMessages(prev => [...prev, loadingMessage]);

    try {
      const responseContent = await getResponse(input);
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
  }, []);

  const handleNewChat = () => {
    trackEvent('new_chat');
    hasSentFirstMessage.current = false;
    startNewConversation();
    setMessages([
      {
        id: uuidv4(),
        role: Role.ASSISTANT,
        content: "Nouvelle conversation ! Que souhaitez-vous explorer ?",
        suggestions: ['🌍 Environnement', '🤝 Société', '🏡 Vie quotidienne', '🎁 Épisode surprise'],
      },
    ]);
  };
  
  const handleFaqClick = (question: string) => {
    if (!isLoading) {
      trackEvent('click_faq', { question });
      handleSendMessage(question);
    }
  }

  const handleListenLaterClick = () => {
    trackEvent('open_listen_later');
    setIsListenLaterOpen(true);
  }
  
  const handleSidebarLinkClick = (linkName: string) => {
    trackEvent('click_sidebar_link', { link_name: linkName });
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-950 p-4 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-slate-800">
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
            <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7104012692293574656" onClick={() => handleSidebarLinkClick('Newsletter')} target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-slate-800 transition-colors">
                <NewsletterIcon />
                <span className="text-sm">Newsletter</span>
            </a>
             <a href="https://www.linkedin.com/in/simon-icard-47766821/" onClick={() => handleSidebarLinkClick('LinkedIn')} target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-slate-800 transition-colors">
                <LinkedInIcon />
                <span className="text-sm">LinkedIn</span>
            </a>
        </div>
      </aside>
      
      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col h-[calc(100vh-230px)] md:h-screen">
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
