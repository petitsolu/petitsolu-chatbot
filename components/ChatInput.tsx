
import React, { useState, useRef, useEffect } from 'react';
import { SendIcon } from './icons';

interface ChatInputProps {
  onSendMessage: (input: string) => void;
  disabled: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="flex items-end gap-3 p-2 bg-slate-800 rounded-xl">
      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Posez votre question ici..."
        className="flex-1 bg-transparent resize-none outline-none placeholder-slate-500 disabled:opacity-50 max-h-40 p-2"
        disabled={disabled}
        rows={1}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !input.trim()}
        className="w-10 h-10 flex items-center justify-center bg-slate-700 rounded-full text-white transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-slate-600"
        aria-label="Envoyer le message"
      >
        <SendIcon />
      </button>
    </div>
  );
};
