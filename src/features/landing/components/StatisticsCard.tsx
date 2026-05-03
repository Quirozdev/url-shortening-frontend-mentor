interface Props {
  iconSrc: string;
  title: string;
  text: string;
}

export function StatisticsCard({ iconSrc, title, text }: Props) {
  return (
    <div className="relative rounded-[5px] bg-white px-5 pt-16 pb-9 @5xl:px-8">
      <div className="absolute top-0 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-950">
        <img src={iconSrc} />
      </div>
      <h3 className="text-preset-4-bold text-center text-gray-900">{title}</h3>
      <p className="text-preset-7-medium text-center text-gray-500">{text}</p>
    </div>
  );
}
