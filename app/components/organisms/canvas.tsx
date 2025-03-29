'use client'
import { useVerseStore } from "@/app/store/verse";
import { Card } from "../atoms";
import { Gradient } from "./gradient";
import { Typography } from "antd";
import {Amiri} from "next/font/google";

const amiri = Amiri({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-amiri",
});

const Canvas = () => {
  const verse = useVerseStore((state) => state.selectedVerse);
  return (
    <div className="relative bg-[#ECF0F4] h-full">
      <div className="absolute inset-0 bg-[url('/assets/canvas/canvas-bg.jpg')] bg-center bg-fixed bg-[length:200px] opacity-30" />

      <div className="relative p-20">
        <Card>
          <Gradient>
            <div className="flex flex-col gap-y-10">
            <Typography.Title level={5} className="text-center">{verse?.title}</Typography.Title>
            <p className={`text-end text-2xl leading-16 ${amiri.className}`}>{verse?.arabic}</p>
            {verse?.urdu && <p className={`text-end text-xl ${amiri.className}`}>{verse?.urdu}</p>}
            <Typography.Text className="text-start text-3xl">{verse?.english}</Typography.Text>
            </div>
          </Gradient>
        </Card>
      </div>
    </div>
  );
};

export default Canvas;
