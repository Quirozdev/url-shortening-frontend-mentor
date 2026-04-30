import { LandingButton } from "@/features/landing/components/LandingButton";

export function LandingHeroSection() {
  return (
    <section className="flex w-full max-w-7xl flex-col-reverse justify-between gap-x-1000 gap-y-500 @5xl:flex-row">
      <div className="flex flex-col items-center gap-300 text-center @5xl:items-start @5xl:text-left">
        <h1 className="text-preset-1 text-gray-900">
          More than just shorter links
        </h1>
        <p className="text-preset-4-medium text-gray-500">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <LandingButton text="Get Started" size="large" className="w-fit" />
      </div>
      <div className="w-full overflow-hidden">
        <img
          src="/images/illustration-working.svg"
          alt="Working Illustration"
          className="translate-x-8 @3xl:translate-x-36"
        />
      </div>
    </section>
  );
}
