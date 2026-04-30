interface Props {
  text: string;
}

export function NavItem({ text }: Props) {
  return (
    <li className="list-none">
      <span className="text-preset-7-bold cursor-pointer text-gray-500 hover:text-gray-900">
        {text}
      </span>
    </li>
  );
}
