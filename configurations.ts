import { Menu, SiteConfig } from "./definitions";

export const SITE_CONFIG: SiteConfig = {
  title: "Jett's Blog",
  description: "A blog powered by Next.js and MDX",
  author: {
    name: "0xJett"
  }
};

export const MENUS: Array<Menu> = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Article",
    children: [
      { title: "Archives", link: "/archive" },
      { title: "Categories", link: "/category" },
      { title: "Tags", link: "/tag" },
    ],
  },
  {
    title: "Friends",
    link: "/friends",
  },
];
