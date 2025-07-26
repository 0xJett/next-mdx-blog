import {
  Archive,
  ChartColumnStacked,
  Info,
  Link,
  PenTool,
  Tag,
} from "lucide-react";
import { Menu, SiteConfig, SocialMediaLinks } from "./definitions";

export const SITE_CONFIG: SiteConfig = {
  title: "Jett's Blog",
  description: "A blog powered by Next.js and MDX",
  author: {
    name: "0xJett",
  },
};

export const MENUS: Array<Menu> = [
  {
    title: "Article",
    icon: PenTool,
    children: [
      { title: "Archives", link: "/archive", icon: Archive },
      { title: "Categories", link: "/category", icon: ChartColumnStacked },
      { title: "Tags", link: "/tag", icon: Tag },
    ],
  },
  {
    title: "About",
    link: "/about",
    icon: Info,
  },
  {
    title: "Friends",
    link: "/friends",
    icon: Link,
  },
];

export const SOCIAL_MEDIA_LINKS: SocialMediaLinks = {
  github: "https://github.com/0xJett",
  email: "mailto:0xjettzhang@gmail.com",
};
