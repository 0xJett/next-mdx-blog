import type { MDXComponents } from "mdx/types";
import MDXLink from "./components/mdx/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: MDXLink,
  };
}
