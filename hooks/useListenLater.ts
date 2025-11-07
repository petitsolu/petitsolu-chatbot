import { useState, useEffect, useCallback } from 'react';
import { Episode } from '../types';

const STORAGE_KEY = 'petitSolu_listenLater';

export const useListenLater = () => {
  const [savedEpisodes, setSavedEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    try {
      const storedItems = window.localStorage.getItem(STORAGE_KEY);
      if (storedItems) {
        setSavedEpisodes(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error("Failed to load episodes from localStorage", error);
    }
  }, []);

  const saveToStorage = (episodes: Episode[]) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(episodes));
    } catch (error) {
      console.error("Failed to save episodes to localStorage", error);
    }
  };

  const addEpisode = useCallback((episode: Episode) => {
    setSavedEpisodes(prevEpisodes => {
      if (prevEpisodes.some(e => e.id === episode.id)) {
        return prevEpisodes; // Already exists
      }
      const newEpisodes = [...prevEpisodes, episode];
      saveToStorage(newEpisodes);
      return newEpisodes;
    });
  }, []);

  const removeEpisode = useCallback((episodeId: string) => {
    setSavedEpisodes(prevEpisodes => {
      const newEpisodes = prevEpisodes.filter(e => e.id !== episodeId);
      saveToStorage(newEpisodes);
      return newEpisodes;
    });
  }, []);

  const isSaved = useCallback((episodeId: string) => {
    return savedEpisodes.some(e => e.id === episodeId);
  }, [savedEpisodes]);

  return { savedEpisodes, addEpisode, removeEpisode, isSaved };
};
