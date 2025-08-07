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
    <Card className="border-none shadow-none">
      <CardHeader className="px-0">
        <CardTitle>
          <Link className="underline" href={`/article/${slug}`}>
            {frontmatter.title}
          </Link>
        </CardTitle>
        <CardDescription>
          Created At {dayjs(frontmatter.createdAt).format("YYYY-MM-DD")}
        </CardDescription>
      </CardHeader>
      {frontmatter.description && (
        <CardContent className="line-clamp-3 px-0">
          {frontmatter.description}
        </CardContent>
      )}
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
        <ul className="space-y-4">
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
