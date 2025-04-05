import { create } from "zustand";

type VerseTypeState = {
  verseType: "random" | "predefined";
  setVerseType: (type: "random" | "predefined") => void;
};

export const useVerseTypeStore = create<VerseTypeState>((set) => ({
  verseType: 'predefined',
  setVerseType: (type: 'random' | 'predefined') => set({ verseType: type }),
}))