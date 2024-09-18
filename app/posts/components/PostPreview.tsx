import Link from "next/link"
import { Post } from "@/app/_lib/ghost"
import React from "react"

const PostPreview = ({ post }: { post: Post }) => {
  return (
    <article
      key={post.id}
      className="flex flex-col items-start justify-between rounded border border-slate-800 p-4 hover:bg-slate-950"
    >
      <div className="flex items-center gap-x-4 text-xs">
        <time
          dateTime={post.published_at}
          className="text-slate-500 dark:text-slate-300"
        >
          {post.published_at.split("T")[0]}
        </time>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600 dark:text-slate-100 dark:group-hover:text-slate-300">
          <Link href={`/posts/${post.slug}`} passHref>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {post.excerpt}
        </p>
      </div>
    </article>
  )
}

export default PostPreview
