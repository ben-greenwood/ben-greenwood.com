import { Post, getPosts } from "@/app/_lib/ghost"

import Bio from "@/app/_components/Bio"
import Header from "@/app/_components/Header"
import PostPreview from "./posts/components/PostPreview"
import SubscribeCta from "./posts/components/SubscribeCta"

const Home = async () => {
  let { posts } = await getPosts({ limit: 2 })

  return (
    <>
      <Header title="Ben Greenwood" />
      <div className="mt-8">
        <Bio />
      </div>
      <div className="mt-10">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-300">
          Recent Thoughts
        </span>
        <hr className="mt-2 w-6 border-indigo-600" />
        <div className="mt-4 space-y-8">
          {posts.map((post: Post) => (
            <PostPreview key={post.id} post={post} />
          ))}
        </div>
        <SubscribeCta className=" mt-12" />
      </div>
    </>
  )
}

export default Home
