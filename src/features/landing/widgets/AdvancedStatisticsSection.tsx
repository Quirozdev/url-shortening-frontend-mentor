import { StatisticsCardList } from "@/features/landing/widgets/StatisticsCardList";

export function AdvancedStatisticsSection() {
  return (
    <section className="@container relative -mt-4 flex w-full max-w-7xl flex-col gap-14">
      <div className="flex flex-col gap-6">
        <h2 className="text-preset-3 @3xl:text-preset-2 text-center text-gray-900">
          Advanced Statistics
        </h2>
        <p className="text-preset-7-medium @3xl:text-preset-6-medium max-w-lg self-center text-center text-gray-500">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <StatisticsCardList />
      <div className="absolute -top-[20vh] -left-[50vw] -z-10 h-[140vh] w-[200vw] bg-purple-50"></div>
    </section>
  );
}
