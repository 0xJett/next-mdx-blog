import { Metadata } from "next";
import { Menu } from "./definitions";

export const DEFAULT_METADATA: Metadata = {
  title: process.env.TITLE,
  description: process.env.DESCRIPTION,
  authors: {
    name: process.env.AUTHOR,
  },
};

export const MENUS: Array<Menu> = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Article",
    children: [
      { title: "Archives", link: "/archives" },
      { title: "Categories", link: "/category" },
      { title: "Tags", link: "/tag" },
    ],
  },
  {
    title: "Friends",
    link: "/friends",
  },
];
