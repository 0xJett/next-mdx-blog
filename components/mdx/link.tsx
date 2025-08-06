import Link from "next/link";
import { ReactNode } from "react";

type MDXLinkProps = {
  href: string;
  children: ReactNode;
};

export default function MDXLink({ href, children }: MDXLinkProps) {
  return (
    <Link target="_blank" href={href} className="underline">
      {children}
    </Link>
  );
}
