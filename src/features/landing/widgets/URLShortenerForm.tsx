import { LandingButton } from "@/features/landing/components/LandingButton";

export function URLShortenerForm() {
  return (
    <form className="flex w-full max-w-7xl gap-6 rounded-[10px] bg-purple-950 bg-[url(/images/bg-shorten-mobile.svg)] bg-top-right bg-no-repeat px-16 py-14 @3xl:bg-[url(/images/bg-shorten-desktop.svg)] @5xl:bg-cover">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="placeholder:text-preset-5-medium flex-1 rounded-[10px] bg-white px-8 py-4 text-gray-900 outline-none"
      />
      <LandingButton
        text="Shorten It!"
        size="large"
        disabled={false}
        className="text-preset-5-bold rounded-[10px]"
      />
    </form>
  );
}
