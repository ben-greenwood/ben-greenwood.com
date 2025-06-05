import Header from "@/app/_components/Header"
import { posts } from "./posts"
import PostList from "./_components/PostList"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ben Greenwood - Blog",
  description: "Articles and thoughts",
}

export default function Blog() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      <Header title="Blog" subtitle="Articles and thoughts" />
      <PostList posts={sortedPosts} />
    </>
  )
}
