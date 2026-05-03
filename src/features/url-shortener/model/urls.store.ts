import {
  getInitialSavedUrls,
  saveUrls,
} from "@/features/url-shortener/lib/urls.helpers";
import type { URLsState } from "@/features/url-shortener/model/urls.types";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useUrlsStore = create(
  subscribeWithSelector<URLsState>((set, get) => ({
    savedUrls: getInitialSavedUrls(),
    saveUrl(longUrl, shortUrl) {
      const { savedUrls } = get();
      set({
        savedUrls: [{ longUrl, shortUrl }, ...savedUrls],
      });
    },
  })),
);

useUrlsStore.subscribe(
  (state) => state.savedUrls,
  (savedUrls) => {
    saveUrls(savedUrls);
  },
);
