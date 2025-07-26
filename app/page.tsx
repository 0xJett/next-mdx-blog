import { getAllArticles } from "@/lib/mdxUtils";
import Link from "next/link";

export default function Home() {
  try {
    const list = getAllArticles();

    if (list.length > 0) {
      return (
        <ul>
          {list.map((item) => (
            <li
              key={`${item.slug} + ${item.createdAt}`}
              className="flex flex-col gap-2"
            >
              <Link href={`/article/${item.slug}`}>
                {item.frontmatter.title}
                {item.frontmatter.description}
                {item.frontmatter.author}
                {new Date(item.updatedAt).toLocaleDateString()}
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
