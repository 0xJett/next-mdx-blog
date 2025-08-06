import { Archive, Info, Link, Shapes } from "lucide-react";
import { Menu, SiteConfig } from "./definitions";

export const SITE_CONFIG: SiteConfig = {
  title: "Next MDX Blog",
  description: "A blog system powered by Next.js and MDX",
  author: {
    name: "0xJett",
    url: "https://github.com/0xJett",
  },
};

export const MENUS: Array<Menu> = [
  {
    title: "Archives",
    link: "/archives",
    icon: Archive,
  },
  {
    title: "Projects",
    link: "/projects",
    icon: Shapes,
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