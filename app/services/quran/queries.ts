import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys";
import { randomVerse } from "./api";
import { useVerseTypeStore } from "@/app/store/verse-type";

export const useGetRandomVerse = () => {
  const { verseType } = useVerseTypeStore();
  return useQuery({
    queryKey: [QUERY_KEYS.RANDOM_VERSE],
    queryFn: randomVerse,
    enabled: verseType === "random",
  });
};