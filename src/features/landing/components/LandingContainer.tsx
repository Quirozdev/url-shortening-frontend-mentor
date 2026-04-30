import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function LandingContainer({ children, className }: Props) {
  return (
    <section className="@container">
      <div className={`px-350 @2xl:px-400 ${className}`}>{children}</div>
    </section>
  );
}
