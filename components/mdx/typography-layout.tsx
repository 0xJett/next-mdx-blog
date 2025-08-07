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
    <article
      className={cn("prose-neutral prose-sm lg:prose-lg mx-auto", className)}
    >
      {children}
    </article>
  );
}
