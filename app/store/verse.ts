import { create } from 'zustand'

interface Verse {
  id: number;
  title: string;
  urdu: string;
  arabic: string;
  english: string;
}

interface VerseStore {
  selectedVerse: Verse | null;
  setSelectedVerse: (verse: Verse) => void;
}

export const useVerseStore = create<VerseStore>((set) => ({
  selectedVerse: null,
  setSelectedVerse: (verse) => set({ selectedVerse: verse }),
}));