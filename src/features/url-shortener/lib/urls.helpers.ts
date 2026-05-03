import {
  SAVED_URLS_STORAGE_KEY,
  type URLPair,
} from "@/features/url-shortener/model/urls.types";
import { getItemOrDefault, setItem } from "@/shared/lib/local-storage";

export function getInitialSavedUrls() {
  return getItemOrDefault<URLPair[]>(SAVED_URLS_STORAGE_KEY, []);
}

export function saveUrls(savedUrls: URLPair[]) {
  setItem(SAVED_URLS_STORAGE_KEY, savedUrls);
}
