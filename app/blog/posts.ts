export type Post = {
  slug: string
  title: string
  description: string
  date: string
}

export const posts: Post[] = [
  {
    slug: "welcome",
    title: "Welcome to my blog",
    description: "An introduction to the new blog on beanacre.xyz",
    date: "2024-01-01",
  },
]
