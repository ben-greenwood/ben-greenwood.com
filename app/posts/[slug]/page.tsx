import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import Header from "@/app/_components/Header"
import Link from "next/link"
import SubscribeCta from "../components/SubscribeCta"
import { getPost } from "@/app/_lib/ghost"

const Post = async ({ params }: { params: { slug: string } }) => {
  const { posts } = await getPost(params.slug)
  const post = posts[0]

  const markup = { __html: post.html }

  return (
    <>
      <Link
        href="/posts"
        passHref
        className="group mb-4 flex items-center text-slate-500 transition-colors duration-200 hover:text-slate-400 dark:text-slate-200 dark:hover:text-slate-300"
      >
        <ArrowLeftIcon className="mr-2 h-3 w-3 transition-transform duration-200 group-hover:-translate-x-1" />{" "}
        view all posts
      </Link>
      <Header title={post.title} />
      <article
        className="prose prose-slate dark:prose-invert sm:prose-lg"
        dangerouslySetInnerHTML={markup}
      ></article>
      <SubscribeCta className=" mt-16" />
    </>
  )
}

export default Post
