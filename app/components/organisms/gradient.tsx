'use client'
import { colorPalettes } from "@/app/lib/colors"
import { usePaletteStore } from "@/app/store/backgroud"
import { useBackgroundStore } from "@/app/store/background-type"
import { RefObject, useEffect, useState } from "react"

export const Gradient = ({ children, ref }: { children: React.ReactNode; ref: RefObject<HTMLDivElement | null>; }) => {
  const selectedPalette = usePaletteStore((state) => state.selectedPalette)
  const { backgroundType, selectedImage } = useBackgroundStore();
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    if (backgroundType === "gradient") {
      const colors = colorPalettes[selectedPalette];
      setGradient(`linear-gradient(${Math.random() * 360}deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`);
    }
  }, [selectedPalette, backgroundType]);

  return (
    <div ref={ref} className="relative h-full w-full rounded-2xl">
      {backgroundType === "image" && selectedImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${selectedImage})` }}
        />
      ) : (
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-300"
          style={{ background: gradient }}
        />
      )}
        <div className="p-4 relative z-10 h-full flex items-center justify-center">{children}</div>
    </div>
  )
}