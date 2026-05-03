import type { ShortenedUrlResponse } from "@/features/url-shortener/types/url-shortener.types";
import axios from "axios";

export async function getShortenedUrl(url: string) {
  const { data } = await axios.post<ShortenedUrlResponse>(
    "https://spoo.me/api/v1/shorten",
    { long_url: url },
  );
  return data;
}
