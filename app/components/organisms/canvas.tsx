"use client";
import { useEffect, useRef } from "react";
import { useVerseStore } from "@/app/store/verse";
import { Card } from "../atoms";
import { Background } from "./background";
import { useDownloadStore } from "@/app/store/trigger-download";
import { downloadImage } from "@/app/lib/helpers";
import { VerseCard } from "../molecules";
import { verseData } from "@/app/lib/data";
import { useGetRandomVerse } from "@/app/services/quran/queries";
import { ShuffleIcon } from "@/app/assets/icons";
import { useVerseTypeStore } from "@/app/store/verse-type";
import { Verse } from "@/app/lib/types";

interface RawVerse {
  number: number;
  surah: {
    englishName: string;
    name: string;
  };
  text: string;
  englishText: string;
}

const Canvas = () => {
  const verse = useVerseStore((state) => state.selectedVerse);
  const cardRef = useRef<HTMLDivElement>(null);
  const setTriggerDownload = useDownloadStore(
    (state) => state.setTriggerDownload
  );
  const setVerse = useVerseStore((state) => state.setSelectedVerse);
  const { verseType } = useVerseTypeStore();
  
  const {data: randomVerse, refetch} = useGetRandomVerse()

  const setFormattedVerse = (verseData: RawVerse | undefined) => {
    if (!verseData) return;

    const formattedVerse: Verse = {
      id: verseData.number,
      title: `${verseData.surah.englishName} | ${verseData.surah.name}`,
      arabic: verseData.text,
      english: verseData.englishText,
    };

    setVerse(formattedVerse);
  };

  useEffect(() => {
    if (randomVerse && verseType === "random") {
      setFormattedVerse(randomVerse);
    }
  }, [randomVerse, verseType]);

  const onRandomVerse = () => refetch(); 

  useEffect(() => {
    setTriggerDownload(() => downloadImage(cardRef));
  }, [setTriggerDownload]);

  useEffect(() => {
    if (!verse && verseData?.length > 0 && verseType !== "random") {
      setVerse(verseData[0]);
    }
  }, [verse, verseData, verseType, setVerse]);

  return (
    <div className="relative bg-[#ECF0F4] h-full">
      <div className="absolute inset-0 bg-[url('/assets/canvas/canvas-bg.jpg')] bg-center bg-fixed bg-[length:200px] opacity-30" />

      <div className="relative p-20">
        <Card className="relative">
          <Background ref={cardRef}>
            <VerseCard verse={verse} />
          </Background>
          {verseType === "random" && (
            <div className="w-full absolute -bottom-3 left-0 flex justify-center right-0 active:scale-75 transition-all duration-300 z-50"
            >
              <div className="bg-gray-50 hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center border border-gray-400 cursor-pointer shadow-2xl"
              onClick={onRandomVerse}
              >
                <ShuffleIcon />
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Canvas;
