"use client"

import Post from "./Post"
import type { Post as PostType } from "../utils"

export default function PostList({ posts }: { posts: PostType[] }) {
  return (
    <div className="mt-4">
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </div>
  )
}
