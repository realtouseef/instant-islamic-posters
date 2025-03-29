"use client";

import React from "react";
import { Button, Radio, Select, Typography } from "antd";
import { colorPalettes } from "@/app/lib/colors";
import { cn } from "@/app/lib/helpers";
import { usePaletteStore } from "@/app/store/backgroud";
import { verseData } from "@/app/lib/data";
import { useVerseStore } from "@/app/store/verse";
import { useSizeStore } from "@/app/store/size";
import { useDownloadStore } from "@/app/store/trigger-download";

const Sidebar = () => {
  const setPalette = usePaletteStore((state) => state.setSelectedPalette);
  const setVerse = useVerseStore((state) => state.setSelectedVerse);
  const setSize = useSizeStore((state) => state.setSize);
  const triggerDownload = useDownloadStore((state) => state.triggerDownload);

  return (
    <div className="flex flex-col min-h-screen w-96 px-5 py-10 gap-y-10">
      <div className="flex flex-col gap-y-3 w-full">
        <Typography.Text className="text-xs font-bold">
          Background
        </Typography.Text>
        <Select
          defaultValue={0}
          className="w-60"
          onChange={(value) => setPalette(value)}
          options={colorPalettes.map((colors, index) => ({
            value: index,
            label: (
              <div className="flex items-center">
                {colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    style={{ backgroundColor: color }}
                    className={cn(
                      "w-5 h-5",
                      colorIndex === 0
                        ? "rounded-l"
                        : colorIndex === colors.length - 1
                        ? "rounded-r"
                        : ""
                    )}
                  />
                ))}
              </div>
            ),
          }))}
        />
      </div>

      <div className="flex flex-col gap-y-3 w-full">
        <Typography.Text className="text-xs font-bold">
          Pick a Verse
        </Typography.Text>
        <Select
          defaultValue={1}
          className="w-60"
          onChange={(id) => {
            const selected = verseData.find((verse) => verse.id === id);
            if (selected) setVerse(selected);
          }}
          options={verseData.map((verse) => ({
            value: verse.id,
            label: (
              <div className="flex flex-col">
                <Typography.Text className="text-xs font-bold">
                  {verse.title}
                </Typography.Text>
              </div>
            ),
          }))}
        />
      </div>

      <div className="flex flex-col gap-y-3 w-full">
        <Typography.Text className="text-xs font-bold">Sizes</Typography.Text>
        <div className="flex gap-x-10">
          <Radio.Group
            defaultValue="portrait"
            buttonStyle="solid"
            className="w-60"
            onChange={(e) =>
              setSize(e.target.value as "portrait" | "landscape")
            }
          >
            <Radio.Button value="portrait">Portrait</Radio.Button>
            <Radio.Button value="landscape">Landscape</Radio.Button>
          </Radio.Group>
        </div>
      </div>

      <div className="flex flex-col gap-y-3 w-full">
        <Typography.Text className="text-xs font-bold">Export</Typography.Text>
        <Button onClick={triggerDownload}>Export</Button>
      </div>
    </div>
  );
};

export default Sidebar;
