import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function LandingContainer({ children }: Props) {
  return (
    <section className="@container">
      <div className="px-350 @2xl:px-400">{children}</div>
    </section>
  );
}
