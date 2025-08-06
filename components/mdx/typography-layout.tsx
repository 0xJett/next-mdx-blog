import { ReactNode } from "react";

export default function TypographyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <article className="prose-neutral lg:prose-xl mx-auto">{children}</article>
  );
}
