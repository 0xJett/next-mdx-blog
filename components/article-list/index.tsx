import { getAllArticles } from "@/lib/mdxUtils";
import dayjs from "dayjs";
import Link from "next/link";

export default function ArticleList() {
  try {
    const list = getAllArticles().sort(
      (a, b) =>
        dayjs(b.frontmatter.updatedAt).unix() -
        dayjs(a.frontmatter.updatedAt).unix()
    );

    if (list.length > 0) {
      return (
        <ul>
          {list.map((item) => (
            <li
              key={`${item.slug} + ${item.frontmatter.updatedAt}`}
              className="flex flex-col gap-2"
            >
              <Link href={`/article/${item.slug}`}>
                {item.frontmatter.title}
                {item.frontmatter.description}
                {item.frontmatter.author}
                {dayjs(item.frontmatter.updatedAt).format("YYYY-MM-DD")}
              </Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return <div>empty</div>;
    }
  } catch (error) {
    return <div>error</div>;
  }
}
