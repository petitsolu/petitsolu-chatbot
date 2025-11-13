import React, { useState } from 'react';
import { Episode } from '../types';
import { CloseIcon, TrashIcon, SpotifyIcon, ApplePodcastsIcon, YouTubeIcon, DeezerIcon, LinkIcon, EmailIcon, CopyIcon, CheckIcon } from './icons';
import { PLATFORM_LABELS, GENERAL_PLATFORM_LINKS } from '../constants';
import { trackEvent } from '../services/analyticsService';

interface ListenLaterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  episodes: Episode[];
  onRemove: (episodeId: string) => void;
}

const platformIcons: { [key: string]: React.ReactNode } = {
    spotify: <SpotifyIcon />,
    apple: <ApplePodcastsIcon />,
    youtube: <YouTubeIcon />,
    deezer: <DeezerIcon />,
    page: <LinkIcon />,
    default: <LinkIcon />,
};

const getIconForPlatform = (platform: string) => {
    for (const key in platformIcons) {
      if (platform.toLowerCase().includes(key)) {
        return platformIcons[key];
      }
    }
    return platformIcons.default;
};

export const ListenLaterPanel: React.FC<ListenLaterPanelProps> = ({ isOpen, onClose, episodes, onRemove }) => {
  const [isCopied, setIsCopied] = useState(false);

  // This wrapper function prevents the click event from bubbling up to the parent page,
  // and also prevents the browser's default action, ensuring only our code runs.
  // Using onMouseDown to catch the event earlier than onClick.
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  const getShareableTextForCopy = () => {
    const introText = "Voici ma sélection du podcast Soluble(s) à écouter plus tard :\n\n";

    const episodeListText = episodes.map(ep => 
      `🎙️ ${ep.title}\n` +
      `Invité(e) : ${ep.guest}\n` +
      `Lien : ${ep.links.page || 'Non disponible'}`
    ).join('\n\n---\n\n');
    
    const footerText = `\n\n---\n\n` +
    `Si vous appréciez Soluble(s), un immense merci de prendre un instant pour laisser une note 5 étoiles et un commentaire. Cela aide énormément à faire découvrir le podcast !\n\n` +
    `- Noter sur Apple Podcasts : ${GENERAL_PLATFORM_LINKS.apple}\n` +
    `- Noter sur Spotify : ${GENERAL_PLATFORM_LINKS.spotify}\n\n` +
    `Merci infiniment pour votre écoute et votre soutien !`;

    return introText + episodeListText + footerText;
  };
  
  const getShareableTextForEmail = () => {
    const episodeList = episodes.map(ep => 
      `🎙️ ${ep.title}\n` +
      `Invité(e) : ${ep.guest}\n` +
      `Lien vers la page de l'épisode : ${ep.links.page || 'Non disponible'}`
    ).join('\n\n---\n\n');

    const introText = "Comme convenu, voici votre sélection du podcast Soluble(s) mise de côté pour écouter plus tard :";

    return (
`Bonjour,

${introText}

---

${episodeList}

---

Si vous appréciez Soluble(s), prendre un instant pour laisser une note 5 étoiles et un commentaire serait un soutien immense.

- Noter sur Apple Podcasts : ${GENERAL_PLATFORM_LINKS.apple}
- Noter sur Spotify : ${GENERAL_PLATFORM_LINKS.spotify}

Cela aide énormément à faire découvrir le podcast. Merci infiniment pour votre écoute et votre soutien !

Bien à vous,

Simon Icard
Créateur du podcast Soluble(s)

---
*Nous n'avons pas accès à votre adresse e-mail via ce dispositif.`
    );
  };


  const handleCopy = () => {
    trackEvent('copy_listen_later_list', { episode_count: episodes.length });
    const textToCopy = getShareableTextForCopy();
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  const subject = "Vos épisodes Soluble(s) à écouter plus tard";
  const body = getShareableTextForEmail();
  const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onMouseDown={handleClose}
        aria-hidden="true"
      ></div>
      <aside 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-slate-800 shadow-lg z-50 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="listen-later-title"
      >
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between p-4 border-b border-slate-700">
            <h2 id="listen-later-title" className="text-xl font-bold">Écouter plus tard</h2>
            <button onMouseDown={handleClose} className="p-2 rounded-full hover:bg-slate-700" aria-label="Fermer le panneau">
              <CloseIcon />
            </button>
          </header>
          
          <div className="flex-1 overflow-y-auto p-4">
            {episodes.length === 0 ? (
              <div className="text-center text-slate-400 h-full flex flex-col justify-center items-center">
                <p>Votre liste est vide.</p>
                <p className="text-sm">Cliquez sur "Écouter plus tard" sous un épisode pour l'ajouter ici.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <a
                      href={mailtoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('send_email_list', { episode_count: episodes.length })}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-colors bg-slate-600 hover:bg-slate-500 border border-slate-500 text-white"
                    >
                      <EmailIcon />
                      Envoyer par e-mail
                    </a>
                    <button
                        onClick={handleCopy}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-colors bg-slate-600 hover:bg-slate-500 border border-slate-500 text-white"
                    >
                        {isCopied ? <CheckIcon /> : <CopyIcon />}
                        {isCopied ? 'Copié !' : 'Copier la sélection'}
                    </button>
                </div>
                <ul className="space-y-3">
                  {episodes.map(episode => (
                    <li key={episode.id} className="bg-slate-700 rounded-lg p-3 group">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-white">{episode.title}</h3>
                          <p className="text-sm text-slate-300">{episode.guest}</p>
                        </div>
                        <button 
                          onClick={() => onRemove(episode.id)}
                          className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-slate-600 rounded-md opacity-0 group-hover:opacity-100 transition-all flex-shrink-0 ml-2"
                          aria-label="Supprimer de la liste"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                          {Object.entries(episode.links).filter(([, link]) => link).map(([platform, link]) => (
                              <a
                              key={platform}
                              href={link as string}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded-md text-xs font-medium transition-colors"
                              >
                              {getIconForPlatform(platform)}
                              <span>{PLATFORM_LABELS[platform] || platform}</span>
                              </a>
                          ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
