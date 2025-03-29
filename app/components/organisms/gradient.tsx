'use client'
import { colorPalettes } from "@/app/lib/colors"
import { usePaletteStore } from "@/app/store/backgroud"
import { RefObject, useEffect, useState } from "react"

export const Gradient = ({ children, ref }: { children: React.ReactNode; ref: RefObject<HTMLDivElement | null>; }) => {
  const selectedPalette = usePaletteStore((state) => state.selectedPalette)
  const [gradient, setGradient] = useState('')

  useEffect(() => {
    const colors = colorPalettes[selectedPalette]
    setGradient(`radial-gradient(circle at 50% 50%, ${colors[0]} 20%, ${colors[1]} 60%, ${colors[2]} 100%)`)
  }, [selectedPalette])

  return (
    <div ref={ref} className="relative h-full w-full rounded-2xl">
      <div
        className="h-full w-full rounded-2xl transition-all duration-300 relative"
        style={{ background: gradient }}
      >
        <div className="p-4 relative z-10">{children}</div>
      </div>
    </div>
  )
}