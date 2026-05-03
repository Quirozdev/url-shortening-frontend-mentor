import { StatisticsCard } from "@/features/landing/components/StatisticsCard";

export function StatisticsCardList() {
  return (
    <article className="relative grid grid-cols-[repeat(1,minmax(0,350px))] items-center justify-center gap-20">
      <div className="absolute top-0 left-1/2 h-full w-2 -translate-x-1/2 bg-blue-400"></div>
      <StatisticsCard
        iconSrc="/images/icon-brand-recognition.svg"
        title="Brand Recognition"
        text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
      />
      <StatisticsCard
        iconSrc="/images/icon-detailed-records.svg"
        title="Detailed Records"
        text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
      />
      <StatisticsCard
        iconSrc="/images/icon-fully-customizable.svg"
        title="Fully Customizable"
        text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
      />
    </article>
  );
}
