interface Props {
  title: string;
  elements: {
    text: string;
    to: string;
  }[];
}

export function FooterLinkSection(props: Props) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-preset-7-bold text-white">{props.title}</p>
      <div className="flex flex-col gap-2">
        {props.elements.map((element, index) => {
          return (
            <a
              key={index}
              href={element.to}
              className="text-preset-7-medium text-gray-400 hover:text-blue-400"
            >
              {element.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
