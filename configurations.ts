import { Github, Info, Mail } from "lucide-react";
import { Menu, SiteConfig, SocialMediaInfo } from "./definitions";

export const SITE_CONFIG: SiteConfig = {
  title: "Jett's Blog",
  description: "A blog powered by Next.js and MDX",
  author: {
    name: "0xJett",
    url: "https://github.com/0xJett",
  },
};

export const MENUS: Array<Menu> = [
  // {
  //   title: "Archives",
  //   link: "/archives",
  //   icon: Archive,
  // },
  {
    title: "About",
    link: "/about",
    icon: Info,
  },
  // {
  //   title: "Friends",
  //   link: "/friends",
  //   icon: Link,
  // },
];

export const SOCIAL_MEDIA_LINKS: SocialMediaInfo[] = [
  {
    text: "Mail Me",
    url: "mailto:0xjettzhang@gmail.com",
    icon: Mail,
  },
  {
    text: "Github",
    url: "https://github.com/0xJett",
    icon: Github,
  },
];
