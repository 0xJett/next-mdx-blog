import { LucideIcon } from "lucide-react";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

/** site config */
export type SiteConfig = {
  title?: string;
  description?: string;
  author?: Author;
};

export type SocialMediaInfo = {
  url: string;
  text: string;
  icon: LucideIcon;
};

/** ---end--- */

/** article related */
export type FrontMatter = {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  createdAt: string;
};

export interface ArticleMeta {
  slug: string;
  frontmatter: FrontMatter;
}

export interface Article extends ArticleMeta {
  content: string;
}
/** ---end--- */

/** menu */
export type Menu = {
  title: string;
  link?: string;
  icon?: LucideIcon;
  children?: Menu[];
};
