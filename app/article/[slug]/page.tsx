import { SITE_CONFIG } from "@/config";
import { getAllArticleSlugs, getArticleData } from "@/lib/mdxUtils";
import { Metadata } from "next";
import { EvaluateOptions, MDXRemote } from "next-mdx-remote-client/rsc";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllArticleSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  try {
    const { frontmatter } = getArticleData(slug);

    return {
      title: frontmatter?.title,
      description: frontmatter?.description,
      keywords: frontmatter.keywords,
      authors: {
        name: frontmatter?.author || SITE_CONFIG.author,
      },
    };
  } catch (error) {
    return {
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
    };
  }
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
