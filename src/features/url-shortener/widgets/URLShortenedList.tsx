import { URLShortenedElement } from "@/features/url-shortener/components/URLShortenedElement";
import { useUrlsStore } from "@/features/url-shortener/model/urls.store";

export function URLShortenedList() {
  const { savedUrls } = useUrlsStore();

  return (
    <section className="@container relative -mt-14 flex w-full max-w-7xl flex-col gap-y-6">
      {savedUrls.map((savedUrl) => {
        return (
          <URLShortenedElement
            key={savedUrl.shortUrl}
            longUrl={savedUrl.longUrl}
            shortUrl={savedUrl.shortUrl}
          />
        );
      })}
      <div className="absolute top-0 -left-[50vw] -z-10 h-full w-[200vw] bg-purple-50"></div>
    </section>
  );
}
