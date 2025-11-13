
import React, { useState } from 'react';
import { Message, Role, Episode } from '../types';
import { EPISODE_DATA, PLATFORM_LABELS } from '../constants';
import { CopyIcon, CheckIcon, SpotifyIcon, ApplePodcastsIcon, YouTubeIcon, DeezerIcon, LinkIcon, LogoIcon, ListenLaterIcon, SavedIcon, TranscriptionIcon } from './icons';
import { Remarkable } from 'remarkable';
import { trackEvent } from '../services/analyticsService';

interface ChatMessageProps {
  message: Message;
  onSendMessage?: (input: string) => void;
  onAddEpisode?: (episode: Episode) => void;
  onRemoveEpisode?: (episodeId: string) => void;
  isEpisodeSaved?: (episodeId: string) => boolean;
}

const md = new Remarkable({ html: false, breaks: true, linkify: true });

const generateCopyableText = (content: string): string => {
  const parts = content.split(/(:::\s*episode\s*[\s\S]*?:::)/gi).filter(Boolean);

  return parts.map(part => {
    const episodeMatch = part.match(/:::\s*episode\s*ID:\s*([^\s]+)\s*:::/i);
    if (episodeMatch) {
      const episodeId = episodeMatch[1];
      const episode = EPISODE_DATA.find(e => e.id === episodeId);
      if (episode) {
        const links = Object.entries(episode.links)
          .filter(([, link]) => link)
          .map(([platform, link]) => `- ${PLATFORM_LABELS[platform] || platform}: ${link as string}`)
          .join('\n');

        return `🎙️ ${episode.title}\n` +
               `Avec : ${episode.guest}\n\n` +
               `📅 ${episode.date}\n` +
               `🕒 ${episode.duration}\n\n` +
               `${episode.description}\n\n` +
               `Liens :\n${links}`;
      }
      return '';
    }
    return part;
  }).join('');
};


const EpisodeCard: React.FC<{ episode: Episode; onAdd: (ep: Episode) => void; onRemove: (id: string) => void; isSaved: boolean; }> = ({ episode, onAdd, onRemove, isSaved }) => {
  if (!episode) return null;

  const platformIcons: { [key: string]: React.ReactNode } = {
    spotify: <SpotifyIcon />,
    apple: <ApplePodcastsIcon />,
    youtube: <YouTubeIcon />,
    deezer: <DeezerIcon />,
    page: <LinkIcon />,
    transcription: <TranscriptionIcon />,
    default: <LinkIcon />,
  };
  
  const getIconForPlatform = (platform: string) => {
    return platformIcons[platform] || platformIcons.default;
  };

  const handleToggleSave = () => {
    if (isSaved) {
      trackEvent('remove_from_listen_later', { episode_id: episode.id, episode_title: episode.title });
      onRemove(episode.id);
    } else {
      trackEvent('add_to_listen_later', { episode_id: episode.id, episode_title: episode.title });
      onAdd(episode);
    }
  };
  
  const handlePlatformClick = (platform: string) => {
    trackEvent('click_episode_platform', { 
        episode_id: episode.id, 
        episode_title: episode.title,
        platform: platform 
    });
  }

  // Group links for two-column display
  const contentKeys = ['page', 'transcription'];
  const platformOrder = ['apple', 'deezer', 'youtube', 'spotify'];

  const allLinks = Object.entries(episode.links).filter(([, link]) => link);
  
  const contentLinksFiltered = allLinks.filter(([platform]) => contentKeys.includes(platform));
  const platformLinksFiltered = allLinks
    .filter(([platform]) => !contentKeys.includes(platform))
    .sort(([a], [b]) => {
        const indexA = platformOrder.indexOf(a);
        const indexB = platformOrder.indexOf(b);
        if (indexA === -1 && indexB === -1) return a.localeCompare(b); // both not in order, sort alphabetically
        if (indexA === -1) return 1; // a is not in order, move to end
        if (indexB === -1) return -1; // b is not in order, move to end
        return indexA - indexB; // sort by predefined order
    });

  return (
    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mt-2 max-w-2xl overflow-hidden">
      <div className="mb-3">
        <h3 className="text-lg font-bold text-white">🎙️ {episode.title}</h3>
        <p className="text-sm text-slate-300 mt-1">Avec : {episode.guest}</p>
        <div className="flex items-center gap-4 text-xs text-slate-400 mt-2">
          <span>📅 {episode.date}</span>
          <span>🕒 {episode.duration}</span>
        </div>
      </div>
      
      <p className="text-sm text-slate-300 mb-4 border-t border-slate-700 pt-3">{episode.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-slate-200 mb-2">Liens :</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {/* Column 1: Content Links */}
          <div className="flex flex-col space-y-2">
            {contentLinksFiltered.map(([platform, link]) => (
              <a
                key={platform}
                href={link as string}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePlatformClick(platform)}
                className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors"
              >
                <span className="w-4 h-4">{getIconForPlatform(platform)}</span>
                <span>{PLATFORM_LABELS[platform] || platform}</span>
              </a>
            ))}
          </div>

          {/* Column 2: Platform Links */}
          <div className="flex flex-col space-y-2">
            {platformLinksFiltered.map(([platform, link]) => (
              <a
                key={platform}
                href={link as string}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePlatformClick(platform)}
                className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors"
              >
                <span className="w-4 h-4">{getIconForPlatform(platform)}</span>
                <span>{PLATFORM_LABELS[platform] || platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleToggleSave}
        className={`w-full flex items-center justify-center gap-2 px-4 py-2 mt-4 rounded-md text-sm font-semibold transition-colors border ${
          isSaved 
            ? 'bg-teal-500/10 border-teal-500 text-teal-400' 
            : 'bg-slate-700 hover:bg-slate-600 border-slate-600 text-white'
        }`}
      >
        {isSaved ? <SavedIcon /> : <ListenLaterIcon />}
        {isSaved ? 'Sauvegardé' : 'Écouter plus tard'}
      </button>
    </div>
  );
};


const TypingIndicator: React.FC = () => (
  <div className="flex items-center space-x-1">
    <span className="block w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0s]"></span>
    <span className="block w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
    <span className="block w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
  </div>
);

const MessageContent: React.FC<Omit<ChatMessageProps, 'onSendMessage'>> = ({ message, onAddEpisode, onRemoveEpisode, isEpisodeSaved }) => {
  const parts = message.content.split(/(:::\s*episode\s*[\s\S]*?:::)/gi);
  
  if (parts.some(part => part.match(/:::\s*episode\s*ID:\s*([^\s]+)\s*:::/i))) {
    trackEvent('view_episode_card', {
        // Note: this will track multiple views if multiple cards are in one message
        episode_ids: parts.map(p => p.match(/:::\s*episode\s*ID:\s*([^\s]+)\s*:::/i)?.[1]).filter(Boolean)
    });
  }

  return (
    <div>
      {parts.map((part, index) => {
        const match = part.match(/:::\s*episode\s*ID:\s*([^\s]+)\s*:::/i);
        if (match && onAddEpisode && onRemoveEpisode && isEpisodeSaved) {
          const episodeId = match[1];
          const episode = EPISODE_DATA.find(e => e.id === episodeId);
          if (episode) {
            return (
              <EpisodeCard 
                key={index} 
                episode={episode} 
                onAdd={onAddEpisode} 
                onRemove={onRemoveEpisode}
                isSaved={isEpisodeSaved(episode.id)}
              />
            );
          }
          return null;
        }
        
        const htmlContent = md.render(part);
        return <div key={index} className="prose prose-invert prose-sm max-w-none [&_a]:text-teal-400 [&_a:hover]:underline [&_strong]:text-white" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
      })}
    </div>
  );
};


export const ChatMessage: React.FC<ChatMessageProps> = ({ message, onSendMessage, onAddEpisode, onRemoveEpisode, isEpisodeSaved }) => {
  const [isCopied, setIsCopied] = useState(false);
  const isAssistant = message.role === Role.ASSISTANT;

  const handleCopy = () => {
    const textToCopy = generateCopyableText(message.content);
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const avatar = isAssistant
    ? (<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0"><LogoIcon className="w-6 h-6 text-teal-400" /></div>)
    : null;
    
  const messageBgColor = isAssistant
    ? message.isError
      ? 'bg-red-900/50 border border-red-700/50 text-red-200'
      : 'bg-slate-800'
    : 'bg-teal-500';

  return (
    <div className={`flex items-start gap-3 w-full ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      {avatar}
      <div className="flex flex-col items-start max-w-2xl">
        <div className={`relative group p-4 rounded-xl ${messageBgColor}`}>
          {message.isLoading ? <TypingIndicator /> : <MessageContent message={message} onAddEpisode={onAddEpisode} onRemoveEpisode={onRemoveEpisode} isEpisodeSaved={isEpisodeSaved} />}
          {isAssistant && !message.isLoading && message.content && (
            <button 
              onClick={handleCopy}
              className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-700/50 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-600/50"
              aria-label="Copier le message"
            >
              {isCopied ? <CheckIcon /> : <CopyIcon />}
            </button>
          )}
        </div>
        {isAssistant && message.suggestions && !message.isLoading && (
          <div className="flex flex-wrap gap-2 mt-3">
            {message.suggestions.map((text, i) => (
              <button
                key={i}
                onClick={() => onSendMessage?.(text)}
                className="px-3 py-1 text-sm bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full transition-colors"
              >
                {text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
