import { Article } from "@/definitions";
import { getAllArticles } from "@/lib/mdxUtils";
import dayjs from "dayjs";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function ArticleOverviewItem({
  slug,
  frontmatter,
}: Pick<Article, "slug" | "frontmatter">) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link className="underline" href={`/article/${slug}`}>
            {frontmatter.title}
          </Link>
        </CardTitle>
        <CardDescription>
          Created At {dayjs(frontmatter.createdAt).format("YYYY-MM-DD")}
        </CardDescription>
      </CardHeader>
      <CardContent className="line-clamp-3">
        {frontmatter.description}
      </CardContent>
    </Card>
  );
}

export default function ArticleList() {
  try {
    const list = getAllArticles().sort(
      (a, b) =>
        dayjs(b.frontmatter.createdAt).unix() -
        dayjs(a.frontmatter.createdAt).unix()
    );

    if (list.length > 0) {
      return (
        <ul>
          {list.map((item) => (
            <li key={`${item.slug} + ${item.frontmatter.createdAt}`}>
              <ArticleOverviewItem {...item} />
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
