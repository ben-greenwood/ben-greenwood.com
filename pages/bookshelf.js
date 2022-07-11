import React from "react"
import Page from "components/v2/Page"
import Header from "components/v2/Header"
import Book from "components/v2/Bookshelf/Book"
import { getCurrentBooksFromOku, getFavBooksFromOku } from "lib/oku.js"

const Bookshelf = ({ currentBooks, favBooks }) => {
  const head = {
    title: "Ben Greenwood - Bookshelf",
    description: "My internet bookshelf",
  }

  return (
    <Page head={head}>
      <>
        <Header
          title="My Bookshelf"
          subtitle="A place for you to judge my reading interests"
        />
        <div className="mt-6">
          <h4 className="magnat-text inline border-b border-black pb-1 font-medium text-black dark:border-slate-300 dark:text-slate-200">
            Currently Reading
          </h4>
          <div className="mt-2">
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
        <div className="mt-10">
          <h4 className="magnat-text inline border-b border-black pb-1 text-black dark:border-slate-200 dark:text-slate-200">
            Favourites
          </h4>
          <div className="mt-2">
            {favBooks.map(({ title, link, creator }) => (
              <Book key={title} title={title} link={link} creator={creator} />
            ))}
          </div>
        </div>
      </>
    </Page>
  )
}

export async function getServerSideProps() {
  const { books: currentBooks } = await getCurrentBooksFromOku()
  const { books: favBooks } = await getFavBooksFromOku()

  return { props: { currentBooks, favBooks } }
}

export default Bookshelf
