'use client'
import { colorPalettes } from "@/app/lib/colors"
import { usePaletteStore } from "@/app/store/backgroud"

export const Gradient = ({ children }: { children: React.ReactNode }) => {
  const selectedPalette = usePaletteStore((state) => state.selectedPalette)

  const generateGradient = () => {
    const colors = colorPalettes[selectedPalette]
    return `linear-gradient(135deg, ${colors.join(', ')})`
  }

  return (
    <div className="relative h-full w-full rounded-2xl">
      <div
        className="h-full w-full rounded-2xl transition-all duration-300 relative"
        style={{ background: generateGradient() }}
      >
        <div className="p-4 relative z-10">{children}</div>
      </div>
    </div>
  )
}