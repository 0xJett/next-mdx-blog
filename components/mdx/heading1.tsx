import { ReactNode } from "react";

export default function MDXH1({ children }: { children: ReactNode }) {
  return <h1 className="font-semibold">{children}</h1>;
}
