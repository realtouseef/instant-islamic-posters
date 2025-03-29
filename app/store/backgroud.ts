import { create } from 'zustand'

type PaletteStoreType = {
  selectedPalette: number
  setSelectedPalette: (palette: number) => void
}

export const usePaletteStore = create<PaletteStoreType>((set) => ({
  selectedPalette: 0,
  setSelectedPalette: (palette: number) => set({ selectedPalette: palette }),
}))