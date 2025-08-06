import { Article, ArticleMeta, FrontMatter } from "@/definitions";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const FILE_EXTENSIONS = [".md", ".mdx"];

// local MDX directory
const ARTICLES_DIRECTORY = path.join(process.cwd(), "articles");

// get all local article slugs
export function getAllArticleSlugs(): string[] {
  return fs
    .readdirSync(ARTICLES_DIRECTORY)
    .filter((file) => FILE_EXTENSIONS.includes(path.extname(file)))
    .map((file) => file.replace(/\.[^/.]+$/, ""));
}

// get specified article slug
export function getArticleData(slug: string): Article {
  let filePath;

  for (const ext of FILE_EXTENSIONS) {
    const possiblePath = path.join(ARTICLES_DIRECTORY, `${slug}${ext}`);

    if (fs.existsSync(possiblePath)) {
      filePath = possiblePath;
      break;
    }
  }

  if (!filePath) throw new Error(`Post not found: ${slug}`);

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as FrontMatter,
    content,
  };
}

// get All local articles metadata
export function getAllArticles(): ArticleMeta[] {
  const slugs = getAllArticleSlugs();

  return slugs.map((slug) => {
    const { frontmatter } = getArticleData(slug);
    return { slug, frontmatter };
  });
}
