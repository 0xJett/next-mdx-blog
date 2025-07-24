import { getAllArticleSlugs, getArticleData } from "@/lib/mdxUtils";
import { EvaluateOptions, MDXRemote } from "next-mdx-remote-client/rsc";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllArticleSlugs();
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { frontmatter, content, createdAt, updatedAt } = getArticleData(slug);

    const options: EvaluateOptions = {
      parseFrontmatter: true,
      scope: frontmatter,
    };

    return <MDXRemote source={content} options={options} />;
  } catch (error) {
    return notFound();
  }
}
