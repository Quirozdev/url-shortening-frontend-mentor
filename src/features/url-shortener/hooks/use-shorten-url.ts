import { getShortenedUrl } from "@/features/url-shortener/api/get-shortened-url";
import { useMutation } from "@tanstack/react-query";

export const useShortenUrl = () => {
  return useMutation({
    mutationFn: (url: string) => {
      return getShortenedUrl(url);
    },
  });
};
