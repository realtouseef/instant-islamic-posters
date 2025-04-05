import { Verse } from "@/app/lib/types";
import { Typography } from "antd";
import { Amiri } from "next/font/google";
import React from "react";

const amiri = Amiri({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-amiri",
});

interface VerseProps {
  verse: Verse | null;
}

const VerseCard = ({ verse }: VerseProps) => {
  return (
    <div className="flex flex-col gap-y-5 bg-white rounded-xl p-3">
      <Typography.Title level={5} className="text-center ${amiri.className}">
        {verse?.title}
      </Typography.Title>
      <p className={`text-end text-2xl leading-16 ${amiri.className}`}>
        {verse?.arabic}
      </p>
      {verse?.urdu && (
        <p className={`text-end text-xl ${amiri.className}`}>{verse?.urdu}</p>
      )}
      <p className="text-start text-lg italic">
        {verse?.english}
      </p>
    </div>
  );
};

export default VerseCard;
