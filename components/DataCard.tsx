import classNames from "classnames";
import { ReactNode } from "react";

export function DataCard({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={classNames("mb-5", className)}>
      <h3 className="text-3xl mb-3">{title}</h3>
      {children}
    </section>
  );
}
