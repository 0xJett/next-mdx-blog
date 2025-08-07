import Link from "next/link";

export default function Page() {
  return (
    <div>
      Project Link:{" "}
      <Link
        href="https://github.com/0xJett/next-mdx-blog"
        target="_blank"
        className="underline"
      >
        https://github.com/0xJett/next-mdx-blog
      </Link>
    </div>
  );
}
