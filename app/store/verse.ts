import { create } from 'zustand'
import { Verse } from '../lib/types';

interface VerseStore {
  selectedVerse: Verse | null;
  setSelectedVerse: (verse: Verse) => void;
}

export const useVerseStore = create<VerseStore>((set) => ({
  selectedVerse: null,
  setSelectedVerse: (verse) => set({ selectedVerse: verse }),
}));