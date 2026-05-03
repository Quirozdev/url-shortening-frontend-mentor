import { LandingButton } from "@/features/landing/components/LandingButton";
import clsx from "clsx";
import type React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {}

export function BoostLinksSection({ className }: Props) {
  return (
    <section
      className={clsx(
        "flex w-screen flex-col items-center gap-6 bg-purple-950 bg-[url(/images/bg-boost-mobile.svg)] bg-cover bg-no-repeat py-14 @3xl:bg-[url(/images/bg-boost-desktop.svg)]",
        className,
      )}
    >
      <h3 className="text-preset-3 @5xl:text-preset-2 text-center text-white">
        Boost your links today
      </h3>
      <LandingButton
        text="Get Started"
        size="large"
        className="text-preset-5-bold"
      />
    </section>
  );
}
