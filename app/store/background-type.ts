import { create } from "zustand";

type BackgroundState = {
  backgroundType: "gradient" | "image";
  selectedImage: string;
  setBackgroundType: (type: "gradient" | "image") => void;
  setSelectedImage: (image: string) => void;
};

export const useBackgroundStore = create<BackgroundState>((set) => ({
  backgroundType: "gradient", // "gradient" | "image"
  selectedImage: "", // Store image URL
  setBackgroundType: (type: "gradient" | "image") => set({ backgroundType: type }),
  setSelectedImage: (image: string) => set({ selectedImage: image }),
}));