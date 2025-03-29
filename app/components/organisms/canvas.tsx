'use client'
import { useEffect, useRef } from "react";
import { useVerseStore } from "@/app/store/verse";
import { Card } from "../atoms";
import { Gradient } from "./gradient";
import { useDownloadStore } from "@/app/store/trigger-download";
import { downloadImage } from "@/app/lib/helpers";
import { VerseCard } from "../molecules";
import { verseData } from "@/app/lib/data";

const Canvas = () => {
  const verse = useVerseStore((state) => state.selectedVerse);
  const cardRef = useRef<HTMLDivElement>(null);
  const setTriggerDownload = useDownloadStore((state) => state.setTriggerDownload);
  const setVerse = useVerseStore((state) => state.setSelectedVerse);

  useEffect(() => {
    setTriggerDownload(() => downloadImage(cardRef))
  }, [setTriggerDownload]);

  useEffect(() => {
    if (!verse && verseData.length > 0) {
      setVerse(verseData[0]); 
    }
  }, [verse, setVerse]);

  return (
    <div className="relative bg-[#ECF0F4] h-full">
      <div className="absolute inset-0 bg-[url('/assets/canvas/canvas-bg.jpg')] bg-center bg-fixed bg-[length:200px] opacity-30" />

      <div className="relative p-20">
        <Card>
          <Gradient ref={cardRef}>
           <VerseCard verse={verse} />
          </Gradient>
        </Card>
      </div>
    </div>
  );
};

export default Canvas;
