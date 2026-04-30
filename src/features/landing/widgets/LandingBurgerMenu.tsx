import { LandingButton } from "@/features/landing/components/LandingButton";
import { useClickOutsideDetector } from "@/shared/hooks/use-click-outside-detector";
import { useKeyDown } from "@/shared/hooks/use-key-press";
import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export function LandingBurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutsideDetector({
    elementRef: menuRef,
    onClickOutside: () => {
      setIsMenuOpen(false);
    },
  });

  useKeyDown({
    key: "Escape",
    onKeyDown: () => {
      setIsMenuOpen(false);
    },
  });

  return (
    <div ref={menuRef} className="relative flex items-center">
      <button
        className="cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <RxHamburgerMenu className="size-6" />
      </button>
      {isMenuOpen && (
        <div className="absolute top-500 right-full w-[calc(100vw-5rem)] rounded-[10px] bg-purple-950 p-400 @2xl:w-[calc(100vw-24rem)]">
          <ul className="flex flex-col items-center gap-400">
            <li className="text-preset-6-bold cursor-pointer text-white">
              Features
            </li>
            <li className="text-preset-6-bold cursor-pointer text-white">
              Pricing
            </li>
            <li className="text-preset-6-bold cursor-pointer text-white">
              Resources
            </li>
            <div className="h-px w-full bg-gray-500"></div>
            <div className="flex w-full flex-col gap-350">
              <li className="text-preset-6-bold cursor-pointer self-center text-white">
                Login
              </li>
              <LandingButton text="Sign Up" size="small" />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
