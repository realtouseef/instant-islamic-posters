import { create } from "zustand";

type BackgroundState = {
  backgroundType: "gradient" | "image";
  selectedImage: string;
  setBackgroundType: (type: "gradient" | "image") => void;
  setSelectedImage: (image: string) => void;
};

export const useBackgroundStore = create<BackgroundState>((set) => ({
  backgroundType: "gradient",
  selectedImage: "",
  setBackgroundType: (type) => set({ backgroundType: type }),
  setSelectedImage: (image) => set({ selectedImage: image }),
}));
