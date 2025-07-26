import { SOCIAL_MEDIA_LINKS } from "@/configurations";
import { SOCIAL_MEDIA_ICON_MAP } from "@/constants";
import { SocialMediaLinks } from "@/definitions";
import Link from "next/link";

export default function SocialMedia() {
  const validLinks: Array<{ key: keyof SocialMediaLinks; value: string }> =
    Object.entries(SOCIAL_MEDIA_LINKS)
      .filter(([key, value]) => !!value)
      .map(([key, value]): { key: keyof SocialMediaLinks; value: string } => ({
        key: key as keyof SocialMediaLinks,
        value,
      }));

  if (validLinks.length > 0) {
    return (
      <ul className="flex items-center gap-1">
        {validLinks.map(({ key, value }) => {
          const Icon = SOCIAL_MEDIA_ICON_MAP[key];

          return (
            <Link key={key} href={value} target="_blank">
              <Icon className="size-5" />
            </Link>
          );
        })}
        <li></li>
      </ul>
    );
  }

  return null;
}
