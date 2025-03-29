import { cn } from "@/app/lib/helpers";
import { useSizeStore } from "@/app/store/size";

export const Card = ({ children }: { children: React.ReactNode }) => {
  const size = useSizeStore((state) => state.size);
  const isPortrait = size === "portrait";
  const cardSize = isPortrait ? "w-[500px] h-[700px]" : "h-[500px] w-[700px]";

  return (
    <div className={cn("bg-white rounded-3xl shadow-2xl p-3", cardSize)}>
      {children}
    </div>
  );
}