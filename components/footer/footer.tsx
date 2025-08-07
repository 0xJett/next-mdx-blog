import { SITE_CONFIG } from "@/configurations";
import dayjs from "dayjs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center md:justify-between py-2 mx-auto px-4 md:max-w-6xl md:px-16 w-screen text-xs md:text-sm">
      <span>
        Copyright ©2025-{dayjs().year()}{" "}
        {SITE_CONFIG.author?.url ? (
          <Link
            href={SITE_CONFIG.author.url}
            className="underline"
            target="_blank"
          >
            {SITE_CONFIG.author?.name}
          </Link>
        ) : (
          SITE_CONFIG.author?.name
        )}
      </span>

      <span>
        Powered by{" "}
        <Link
          target="_blank"
          className="underline"
          href="https://github.com/0xJett/next-mdx-blog"
        >
          Next MDX Blog
        </Link>
      </span>
    </footer>
  );
}
