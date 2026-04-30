interface Props {
  text: string;
  size: "small" | "large";
  disabled: boolean;
}

export function LandingButton({ text, size, disabled }: Props) {
  const sizeClasses = size === "small" ? "px-350 py-100" : "px-500 py-300";

  const disabledClasses = disabled === true ? "bg-blue-300" : "bg-blue-400";

  return (
    <button
      disabled={disabled}
      className={`text-preset-7-bold cursor-pointer rounded-[28px] text-white ${sizeClasses} ${disabledClasses}`}
    >
      {text}
    </button>
  );
}
