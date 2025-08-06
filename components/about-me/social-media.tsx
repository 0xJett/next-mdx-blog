import { SOCIAL_MEDIA_LINKS } from "@/configurations";
import Link from "next/link";

export default function SocialMedia() {
  if (SOCIAL_MEDIA_LINKS.length > 0) {
    return (
      <ul className="flex items-center gap-1 !pl-0">
        {SOCIAL_MEDIA_LINKS.map(({ text, icon, url }) => {
          const Icon = icon;

          return (
            <li key={text} className="list-none flex items-center gap-1">
              <span>{text}:</span>
              <Link href={url} target="_blank">
                <Icon className="size-5" />
                <span className="sr-only">{text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return null;
}
