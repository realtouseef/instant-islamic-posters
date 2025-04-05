import clsx, { ClassValue } from "clsx";
import html2canvas from "html2canvas";
import { RefObject } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const downloadImage = async (cardRef: RefObject<HTMLDivElement | null>) => {
  if (cardRef.current) {
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: null, 
      useCORS: true,
      scale: 2,
    });

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "verse.png";
    link.click();
  }
};

export const randomNumberGenerator = (max: number) => Math.floor(Math.random() * max) + 1;