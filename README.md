# next-mdx-blog

This is a blog system build with: [Next.js](https://nextjs.org/), [Vercel](https://vercel.com/home), [Tailwind CSS](https://tailwindcss.com/), [Supabase on Vercel](https://vercel.com/jett-projects/~/integrations/supabase)(Optional if you want to manage your articles in a CMS).

## Features

- [x] write MD & MDX articles directly in articles directory
- [x] frontmatter supported
- [ ] category
- [ ] tag
- [ ] archiving
- [x] dark mode
- [ ] multiple language
- [ ] multiple templates
- [ ] private article
- [ ] support CMS managed MD & MDX article

## Configurations

You can config you site manually.
Below are the supported params, all of the params are optional, but you'd better set the author param.
|key|type|default value|remark|
|---|---|---|---|
|title|string|''||
|description|string|''||
|createdAt|string|''||

## Running Locally

```bash
git clone git@github.com:0xJett/next-mdx-blog.git
cd next-mdx-blog
pnpm install
pnpm dev
```

After these steps, you can visit the project on `localhost:3000`, also you can visit `localhost:3000/article/example` to see the example article.

## Write Article Locally

1. Create articles in the articles folder under the root directory.
2. visit `localhost:3000/article/${your article name}`,

You can set the article params on the top of the article by using this grammar, set the params correctly will improve SEO effectiveness.

```markdown
---
title: Example article
description: This is the description of the article
keywords: ["example", "english"]
author: 0xJett
---
```

## Deploy on Vercel

1. use the Github OAuth method to create an account on vercel
2. import the project into vercel
3. deploy the project
4. open the deployed link on Overview panel
