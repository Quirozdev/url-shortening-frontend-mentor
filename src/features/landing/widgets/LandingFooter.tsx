import { FooterLinkSection } from "@/features/landing/components/FooterLinkSection";
import { FacebookIcon } from "@/shared/components/icons/FacebookIcon";
import { InstagramIcon } from "@/shared/components/icons/InstagramIcon";
import { Logo } from "@/shared/components/icons/Logo";
import { PinterestIcon } from "@/shared/components/icons/PinterestIcon";
import { TwitterIcon } from "@/shared/components/icons/TwitterIcon";

export function LandingFooter() {
  return (
    <footer className="relative -mt-20 grid w-full max-w-7xl grid-cols-1 justify-items-center gap-y-12 py-14 @5xl:grid-cols-[1fr_auto_1fr] @5xl:justify-items-normal @5xl:py-16">
      <a href="#">
        <Logo className="text-white" />
      </a>
      <div className="flex flex-col gap-8 text-center @5xl:flex-row @5xl:gap-24 @5xl:text-left">
        <FooterLinkSection
          title="Features"
          elements={[
            { text: "Link Shortening", to: "#" },
            { text: "Branded Links", to: "#" },
            { text: "Analytics", to: "#" },
          ]}
        />
        <FooterLinkSection
          title="Resources"
          elements={[
            { text: "Blog", to: "#" },
            { text: "Developers", to: "#" },
            { text: "Support", to: "#" },
          ]}
        />
        <FooterLinkSection
          title="Company"
          elements={[
            { text: "About", to: "#" },
            { text: "Our Team", to: "#" },
            { text: "Careers", to: "#" },
            { text: "Contact", to: "#" },
          ]}
        />
      </div>
      <div className="flex h-fit items-center gap-6 @5xl:justify-self-end">
        <a
          href="https://facebook.com"
          target="_blank"
          className="text-white transition-colors duration-300 ease-in-out hover:text-blue-400"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          className="text-white transition-colors duration-300 ease-in-out hover:text-blue-400"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://pinterest.com"
          target="_blank"
          className="text-white transition-colors duration-300 ease-in-out hover:text-blue-400"
        >
          <PinterestIcon />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          className="text-white transition-colors duration-300 ease-in-out hover:text-blue-400"
        >
          <InstagramIcon />
        </a>
      </div>
      <div className="absolute top-0 -left-[50vw] -z-10 h-full w-[150vw] bg-gray-950"></div>
    </footer>
  );
}
