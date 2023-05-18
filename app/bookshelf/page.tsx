import { getCurrentBooksFromOku, getFavBooksFromOku } from "@/lib/oku"

import Book from "@/components/Bookshelf/Book"
import Header from "@/components/Header"
import React from "react"

export const metadata = {
  title: "Ben Greenwood - Bookshelf",
  description: "My internet bookshelf",
}

const Bookshelf = async () => {
  const { books: currentBooks } = await getCurrentBooksFromOku()
  const { books: favBooks } = await getFavBooksFromOku()

  return (
    <>
      <Header
        title="My Bookshelf"
        subtitle="A collection of my favourite books"
      />
      {currentBooks && (
        <div className="mt-6">
          <h4 className="magnat-text inline border-b border-black pb-1 text-sm font-medium text-black dark:border-slate-300 dark:text-slate-200">
            Currently Reading
          </h4>
          <div className="mt-4">
            {currentBooks.map(({ title, link, creator }) => (
              <Book
                key={title}
                title={title}
                link={link}
                creator={creator}
                current={true}
              />
            ))}
          </div>
        </div>
      )}
      {favBooks && (
        <div className="mt-10">
          <h4 className="magnat-text inline border-b border-black pb-1 text-sm text-black dark:border-slate-200 dark:text-slate-200">
            Favourites
          </h4>
          <div className="mt-4">
            {favBooks.map(({ title, link, creator }) => (
              <Book key={title} title={title} link={link} creator={creator} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Bookshelf
