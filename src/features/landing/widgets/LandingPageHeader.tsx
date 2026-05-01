import { LandingButton } from "@/features/landing/components/LandingButton";
import { NavItem } from "@/features/landing/components/NavItem";
import { LandingBurgerMenu } from "@/features/landing/widgets/LandingBurgerMenu";

export function LandingPageHeader() {
  return (
    <header className="@container flex w-full max-w-7xl items-center justify-between pt-600">
      <div className="flex items-center gap-600">
        <a href="/">
          <img src="/images/logo.svg" alt="Logo" />
        </a>
        <nav className="hidden @2xl:block">
          <ul className="flex gap-400">
            <NavItem text="Features" />
            <NavItem text="Pricing" />
            <NavItem text="Resources" />
          </ul>
        </nav>
      </div>
      <>
        <div className="hidden items-center gap-400 @2xl:flex">
          <NavItem text="Login" />
          <LandingButton
            text="Sign Up"
            size="small"
            className="text-preset-7-bold"
          />
        </div>
        <div className="flex items-center @2xl:hidden">
          <LandingBurgerMenu />
        </div>
      </>
    </header>
  );
}
