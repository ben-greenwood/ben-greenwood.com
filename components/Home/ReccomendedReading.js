import Article from "../Article"
import { BookmarkIcon } from "@heroicons/react/outline"
import ReccomendedTextBubble from "./ReccomendedTextBubble"

const ReccomendedReading = () => {
  const articles = [
    {
      reccomended: true,
      img: "https://uploads-ssl.webflow.com/618bc2e78ccacb31ced8ffbd/618bc4c1edd4acdb2c75466f_PragmaticEngineerNewsletterLogo-p-1080.png",
      title: "Migrations Done Well: Executing Migrations",
      url: "https://blog.pragmaticengineer.com/migrations-done-well-executing-them/",
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
      <h5 className="mb-4 flex items-center font-medium text-gray-700">
        <BookmarkIcon className="stroke-curren mr-2 h-5 w-5" />
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
