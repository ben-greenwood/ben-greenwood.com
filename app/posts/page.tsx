import { Post, getPosts } from "@/app/_lib/ghost"

import Header from "@/app/_components/Header"
import { Metadata } from "next"
import PostPreview from "./components/PostPreview"
import React from "react"
import SubscribeCta from "./components/SubscribeCta"

export const metadata: Metadata = {
  title: "Ben Greenwood - Posts",
  description: "Where tech meets curiosity.",
}

const Bookshelf = async () => {
  let { posts } = await getPosts({ limit: "all" })

  return (
    <>
      <Header title="201 Created" subtitle="Where tech meets curiosity." />
      <div className="mt-6 space-y-8">
        {posts.map((post: Post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
      <SubscribeCta className=" mt-12" />
    </>
  )
}

export default Bookshelf
