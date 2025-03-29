import {create} from 'zustand';


interface SizeState {
  size: 'portrait' | 'landscape';
  setSize: (size: 'portrait' | 'landscape') => void;
}

export const useSizeStore = create<SizeState>((set) => ({
  size: 'portrait',
  setSize: (size) => set({ size }),
}));