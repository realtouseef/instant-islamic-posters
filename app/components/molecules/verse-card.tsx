import { Verse } from "@/app/lib/types";
import { Amiri_Quran } from "next/font/google";
import React from "react";

const amiri = Amiri_Quran({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-amiri",
});

interface VerseProps {
  verse: Verse | null;
}

const VerseCard = ({ verse }: VerseProps) => {
  return (
      <div className="flex flex-col gap-y-5 bg-white dark:bg-neutral-950 rounded-xl p-3">
        <h1
          className={`text-center text-black dark:text-white`}
        >
          {verse?.title}
        </h1>
        <p
          className={`text-end text-2xl leading-16 text-black dark:text-white ${amiri.className}`}
        >
          {verse?.arabic}
        </p>
        {verse?.urdu && (
          <p className={`text-end text-xl text-black dark:text-white ${amiri.className}`}>
            {verse?.urdu}
          </p>
        )}
        <p className="text-start text-lg italic text-black dark:text-white">
          {verse?.english}
        </p>
      </div>
  );
};

export default VerseCard;
