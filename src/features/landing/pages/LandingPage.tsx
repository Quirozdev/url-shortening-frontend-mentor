import { LandingContainer } from "@/features/landing/components/LandingContainer";
import { LandingHeroSection } from "@/features/landing/widgets/LandingHeroSection";
import { LandingPageHeader } from "@/features/landing/widgets/LandingPageHeader";
import { URLShortenerForm } from "@/features/landing/widgets/URLShortenerForm";

export function LandingPage() {
  return (
    <LandingContainer className="flex flex-col items-center gap-1000">
      <LandingPageHeader />
      <LandingHeroSection />
      <URLShortenerForm />
    </LandingContainer>
  );
}
