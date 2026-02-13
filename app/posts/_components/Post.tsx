import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import type { Post } from "../utils"
import formatDate from "@/app/_utils/formatDate"

export default function Post({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      prefetch
      passHref
      className="group flex items-center py-4"
    >
      <h3 className="max-w-[45%] truncate text-sm text-slate-700 dark:text-slate-300 sm:max-w-none">
        {post.title}
      </h3>
      <span className="ml-2 text-xs font-normal text-slate-400">
        {formatDate(post.date)}
      </span>
      <div className="transition-all ml-4 flex-grow border-t-2 border-dotted border-slate-200 duration-300 ease-in-out group-hover:border-emerald-400 dark:border-slate-700"></div>
      <ArrowRightIcon className="transition-all ml-2 h-4 w-4 text-slate-300 duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-emerald-400 dark:text-slate-500" />
    </Link>
  )
}
