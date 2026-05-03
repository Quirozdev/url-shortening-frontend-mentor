import { LandingContainer } from "@/features/landing/components/LandingContainer";
import { LandingHeroSection } from "@/features/landing/widgets/LandingHeroSection";
import { LandingPageHeader } from "@/features/landing/widgets/LandingPageHeader";
import { URLShortenerForm } from "@/features/landing/widgets/URLShortenerForm";
import { URLShortenedList } from "@/features/url-shortener/widgets/URLShortenedList";

export function LandingPage() {
  return (
    <LandingContainer className="flex flex-col items-center gap-1000 overflow-hidden">
      <LandingPageHeader />
      <LandingHeroSection />
      <URLShortenerForm />
      <URLShortenedList />
    </LandingContainer>
  );
}
