import { LandingButton } from "@/features/landing/components/LandingButton";

export function LandingHeroSection() {
  return (
    <section className="flex w-full max-w-7xl flex-col-reverse justify-between gap-x-1000 gap-y-500 @5xl:flex-row">
      <div className="flex flex-1 flex-col items-center gap-300 text-center @5xl:items-start @5xl:text-left">
        <h1 className="text-preset-2 @2xl:text-preset-1 text-gray-900">
          More than just shorter links
        </h1>
        <p className="text-preset-6-medium @2xl:text-preset-4-medium text-gray-500">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <LandingButton
          text="Get Started"
          size="large"
          className="text-preset-5-bold w-fit"
        />
      </div>
      <div className="flex-1 overflow-hidden">
        <img
          src="/images/illustration-working.svg"
          alt="Working Illustration"
          className="mx-auto min-w-[150%] @md:min-w-[120%] @2xl:min-w-max"
        />
      </div>
    </section>
  );
}
