import Article from "../Article"
import { BookmarkIcon } from "@heroicons/react/solid"
import ReccomendedTextBubble from "./ReccomendedTextBubble"

const ReccomendedReading = () => {
  const articles = [
    {
      reccomended: true,
      img: "https://height-blog.ghost.io/content/images/2022/01/blog-post-contextMenu-1.png",
      title:
        "Building like it's 1984: A comprehensive guide to creating intuitive context menus",
      url: "https://height.app/blog/guide-to-build-context-menus",
    },
    {
      reccomended: false,
      img: "https://moxie.org/blog/images/nft-opensea.png",
      title: "My first impressions of web3",
      url: "https://moxie.org/2022/01/07/web3-first-impressions.html",
    },
    {
      reccomended: false,
      title: "How does UTF-8 turn “😂” into “F09F9882”?",
      url: "https://sethmlarson.dev/blog/utf-8",
    },
  ]

  return (
    <div className="relative">
      <h5 className="mb-4 flex items-center font-medium">
        <BookmarkIcon className="mr-2 h-5 w-5 fill-current text-gray-800" />
        Interesting reads...
      </h5>
      <ReccomendedTextBubble />
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-1">
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
