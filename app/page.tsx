import Bio from "@/app/_components/Bio"
import Header from "@/app/_components/Header"
import PostList from "./posts/_components/PostList"
import { getPosts } from "./posts/utils"

export default async function Home() {
  const posts = await getPosts()

  return (
    <>
      <Header title="Ben Greenwood" />
      <div className="mt-8">
        <Bio />
      </div>
      <div className="mt-8">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-300">
          Latest Posts
        </span>
        <hr className="mt-2 w-6 border-emerald-600" />
        <PostList posts={posts} />
      </div>
    </>
  )
}
