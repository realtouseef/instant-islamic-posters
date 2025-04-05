import { QURAN_TOTAL_VERSES } from '@/app/lib/contants'
import { randomNumberGenerator } from '@/app/lib/helpers'
import axios from 'axios'

export const randomVerse = async () => {
  const VERSE_NUMBER = randomNumberGenerator(QURAN_TOTAL_VERSES);
  const ARABIC_VERSE_ENDPOINT = `${process.env.NEXT_PUBLIC_ALQURAN_API_ENDPOINT}/${VERSE_NUMBER}`;
  const ENGLISH_VERSE_ENDPOINT = `${process.env.NEXT_PUBLIC_ALQURAN_API_ENDPOINT}/${VERSE_NUMBER}/en.sahih`;

  try {
    const [arabicResponse, englishResponse] = await Promise.all([
      axios.get(ARABIC_VERSE_ENDPOINT),
      axios.get(ENGLISH_VERSE_ENDPOINT),
    ]);

    const arabicData = arabicResponse.data.data;
    const englishData = englishResponse.data.data;

    return {
      number: arabicData.number,
      surah: {
        englishName: arabicData.surah.englishName,
        name: arabicData.surah.name,
      },
      text: arabicData.text,
      englishText: englishData.text,
    };
  } catch (error: unknown) {
    console.error("Error fetching random verse:", error);
    throw error;
  }
};