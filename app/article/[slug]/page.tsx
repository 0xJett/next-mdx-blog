import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ slug: "welcome" }, { slug: "about" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { default: Post } = await import(`@/articles/${slug}.mdx`);
    return <Post />;
  } catch (error) {
    return notFound();
  }
}
