import type { MDXComponents } from "mdx/types";
import MDXH1 from "./components/mdx/heading1";
import MDXLink from "./components/mdx/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: MDXLink,
    h1: MDXH1,
  };
}
