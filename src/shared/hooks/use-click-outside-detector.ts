import { useEffect, type RefObject } from "react";

interface Props {
  elementRef: RefObject<HTMLElement | null>;
  onClickOutside: () => void;
}

export function useClickOutsideDetector({ elementRef, onClickOutside }: Props) {
  useEffect(() => {
    const handleOutsideClick = (e: PointerEvent) => {
      if (!elementRef.current) return;

      const menuRefContainsClickedElement = elementRef.current?.contains(
        e.target as Node,
      );

      if (!menuRefContainsClickedElement) {
        onClickOutside();
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);
}
