export interface Phrase {
  situation: string;
  script: string;
  note?: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  tags?: string[];
}

export interface ManualSection {
  id: string;
  title: string;
  content: string[];
}

export enum Tab {
  FLOW = 'FLOW',
  MENU = 'MENU',
  PHRASES = 'PHRASES',
  AI_TRAINER = 'AI_TRAINER'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}