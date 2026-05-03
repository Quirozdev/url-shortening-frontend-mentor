import { LandingButton } from "@/features/landing/components/LandingButton";
import { copyToClipboard } from "@/shared/lib/click-actions";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  longUrl: string;
  shortUrl: string;
}

export function URLShortenedElement({ longUrl, shortUrl }: Props) {
  const [isCopying, setIsCopying] = useState<boolean>(false);

  const onCopy = () => {
    setIsCopying(true);
    copyToClipboard(shortUrl);
    setTimeout(() => {
      setIsCopying(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col rounded-[5px] bg-white @3xl:flex-row @3xl:items-center">
      <span className="text-preset-7-medium @3xl:text-preset-5-medium w-full truncate px-4 py-4 text-gray-900">
        {longUrl}
      </span>
      <div className="h-px bg-gray-500 opacity-25"></div>
      <div className="flex flex-col @3xl:flex-row @3xl:items-center @3xl:justify-end">
        <a
          href={shortUrl}
          target="_blank"
          className="text-preset-7-medium @3xl:text-preset-5-medium px-4 py-2 text-blue-400"
        >
          {shortUrl}
        </a>
        <LandingButton
          text={isCopying ? "Copied!" : "Copy"}
          size="small"
          className={clsx(
            "text-preset-7-bold mx-4 mt-2 mb-4 min-w-28 rounded-[5px] @3xl:mb-2",
            isCopying && "bg-purple-950",
          )}
          onClick={onCopy}
        />
      </div>
    </div>
  );
}
