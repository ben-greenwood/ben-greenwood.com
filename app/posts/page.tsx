import Header from "@/app/_components/Header"
import { getPosts } from "./utils"
import PostList from "./_components/PostList"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ben Greenwood - Posts",
  description: "Articles and thoughts",
}

export default async function Posts() {
  const posts = await getPosts()

  return (
    <>
      <Header title="Posts" subtitle="Articles and thoughts" />
      <PostList posts={posts} />
    </>
  )
}