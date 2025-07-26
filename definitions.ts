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
