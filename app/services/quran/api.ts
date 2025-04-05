import { QURAN_TOTAL_VERSES } from '@/app/lib/contants'
import { randomNumberGenerator } from '@/app/lib/helpers'
import axios from 'axios'



export const randomVerse = async () => {
  const VERSE_NUMBER = randomNumberGenerator(QURAN_TOTAL_VERSES);
  const ARABIC_VERSE_ENDPOINT = `${process.env.NEXT_PUBLIC_ALQURAN_API_ENDPOINT}/${VERSE_NUMBER}`
  try {
    const result = await axios.get(ARABIC_VERSE_ENDPOINT);
    return result.data.data;
  } catch (error: unknown) {
    console.error(error)
  }
}