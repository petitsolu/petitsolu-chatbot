export enum Role {
  USER = 'user',
  ASSISTANT = 'assistant'
}

export interface Message {
  id: string;
  role: Role;
  content: string;
  isLoading?: boolean;
  isError?: boolean;
  suggestions?: string[];
}

export interface Episode {
  id: string;
  title: string;
  guest: string;
  date: string;
  duration: string;
  category: string;
  description: string;
  themes: string[];
  links: {
    page: string | null;
    spotify: string | null;
    apple: string | null;
    youtube: string | null;
    deezer: string | null;
    transcription: string | null;
    summary: string | null;
    [key: string]: string | null;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}