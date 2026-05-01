import type React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size: "small" | "large";
  disabled?: boolean;
}

export function LandingButton({
  text,
  size,
  disabled = false,
  className,
  ...props
}: Props) {
  const sizeClasses = size === "small" ? "px-350 py-100" : "px-500 py-300";

  const disabledClasses = disabled === true ? "bg-blue-300" : "bg-blue-400";

  return (
    <button
      disabled={disabled}
      className={`${twMerge(
        clsx("cursor-pointer", "rounded-[28px]", sizeClasses, disabledClasses),
        className,
      )} text-white`}
      {...props}
    >
      {text}
    </button>
  );
}
