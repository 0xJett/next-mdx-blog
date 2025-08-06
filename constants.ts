import { Metadata } from "next";
import { SITE_CONFIG } from "./configurations";

export const DEFAULT_METADATA: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  authors: SITE_CONFIG.author,
};

export const PROGRAMMING_LANGS: Array<{ title: string; logo: string }> = [
  {
    title: "HTML5",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
  },
  {
    title: "CSS3",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
  },
  {
    title: "JavaScript",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
  },
  {
    title: "TypeScript",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
  },
  {
    title: "Next.js",
    logo: "https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png",
  },
  {
    title: "React",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
  },
  {
    title: "Tailwind CSS",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png",
  },
  {
    title: "Vue",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png",
  },
  {
    title: "Angular",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png",
  },
  {
    title: "Electron",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/electron/electron.png",
  },
];
