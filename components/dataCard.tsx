import { ReactNode } from "react";

export default function DataCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-5">
      <h3 className="text-3xl mb-3">{title}</h3>
      {children}
    </section>
  );
}
