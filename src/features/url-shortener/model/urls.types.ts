export const SAVED_URLS_STORAGE_KEY = "saved_urls";

export interface URLsState {
  savedUrls: URLPair[];
  saveUrl: (longUrl: string, shortUrl: string) => void;
}

export interface URLPair {
  longUrl: string;
  shortUrl: string;
}
