import React from "react"
import Article from "components/v2/Article"
import { BookmarkIcon } from "@heroicons/react/outline"
import ReccomendedTextBubble from "components/v2/ReccomendedTextBubble"

const ReccomendedReading = () => {
  const articles = [
    {
      reccomended: true,
      title: "DALL·E 2 and The Origin of Vibe Shifts",
      url: "https://every.to/divinations/dall-e-2-and-the-origin-of-vibe-shifts",
    },
    {
      reccomended: false,
      img: "https://height-blog.ghost.io/content/images/2022/01/blog-post-contextMenu-1.png",
      title:
        "Building like it's 1984: A comprehensive guide to creating intuitive context menus",
      url: "https://height.app/blog/guide-to-build-context-menus",
    },
    {
      reccomended: false,
      title: "User Interface Gallery",
      url: "https://ui.gallery/",
    },
  ]

  return (
    <div className="relative">
      <h5 className="mb-4 flex items-center font-medium text-slate-400">
        <BookmarkIcon className="stroke-curren mr-2 h-5 w-5" />
        Interesting reads...
      </h5>
      <ReccomendedTextBubble />
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {articles &&
          articles.map(({ img, url, title, reccomended }, index) => (
            <Article
              key={title}
              index={index}
              img={img}
              title={title}
              url={url}
              className={reccomended ? "order-1 sm:order-2" : "order-2"}
            />
          ))}
      </div>
    </div>
  )
}

export default ReccomendedReading
