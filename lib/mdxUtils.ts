import fs from "fs";
import matter from "gray-matter";
import path from "path";

const FILE_EXTENSIONS = ["md", "mdx"];

// local MDX directory
const ARTICLES_DIRECTORY = path.join(process.cwd(), "articles");

// get all local article slugs
export function getAllArticleSlugs() {
  return fs
    .readdirSync(ARTICLES_DIRECTORY)
    .filter((file) => FILE_EXTENSIONS.includes(path.extname(file)))
    .map((file) => file.replace(/\.[^/.]+$/, ""));
}

// get specified article slug
export function getArticleData(slug: string) {
  let filePath;

  for (const ext of FILE_EXTENSIONS) {
    const possiblePath = path.join(ARTICLES_DIRECTORY, `${slug}.${ext}`);
    if (fs.existsSync(possiblePath)) {
      filePath = possiblePath;
      break;
    }
  }

  if (!filePath) throw new Error(`Post not found: ${slug}`);

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);

  // 获取文件的统计信息
  const stats = fs.statSync(filePath);
  const createdAt = stats.birthtimeMs;
  const updatedAt = stats.mtimeMs;

  return {
    frontmatter,
    content,
    createdAt,
    updatedAt,
  };
}

// // 获取所有文章的前置元数据 (用于列表页)
// export function getAllPosts() {
//   const slugs = getAllPostSlugs();
//   return slugs
//     .map((slug) => {
//       const { frontmatter } = getPostData(slug);
//       return { slug, frontmatter };
//     })
//     .sort(
//       (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
//     );
// }
