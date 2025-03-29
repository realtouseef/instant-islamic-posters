import { create } from "zustand";

interface DownloadState {
  triggerDownload: () => void;
  setTriggerDownload: (fn: () => void) => void;
}

export const useDownloadStore = create<DownloadState>((set) => ({
  triggerDownload: () => {},
  setTriggerDownload: (fn) => set({ triggerDownload: fn }),
}));