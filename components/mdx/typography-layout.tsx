import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

export default function TypographyLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: ClassNameValue;
}) {
  return (
    <article className={cn("prose-neutral lg:prose-xl mx-auto", className)}>
      {children}
    </article>
  );
}
