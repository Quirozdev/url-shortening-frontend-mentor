import { LandingButton } from "@/features/landing/components/LandingButton";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export function LandingBurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: PointerEvent) => {
      if (!e.target || !menuRef.current) return;

      const menuRefContainsClickedElement = menuRef.current?.contains(
        e.target as Node,
      );

      if (!menuRefContainsClickedElement) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    document.addEventListener("keyup", handleKeyPress);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

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
              <LandingButton text="Sign Up" size="small" disabled={false} />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
