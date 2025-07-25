import { LucideIcon } from "lucide-react";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

/** site config */
export type SiteConfig = {
  title?: string;
  description?: string;
  author?: Author;
};

export type SocialMediaLinks = {
  github?: string;
  email?: string;
};
/** ---end--- */

/** article related */
export type FrontMatter = {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
};

export interface ArticleMeta {
  slug: string;
  frontmatter: FrontMatter;
  createdAt: number;
  updatedAt: number;
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
