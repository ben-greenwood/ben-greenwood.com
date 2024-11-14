import React, { Suspense } from "react"
import { getCurrentBooksFromOku, getFavBooksFromOku } from "@/app/_lib/oku"

import BookList from "./_components/BookList"
import Header from "@/app/_components/Header"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ben Greenwood - Bookshelf",
  description: "My internet bookshelf",
}

export const experimental_ppr = true

const Bookshelf = async () => {
  const { books: currentBooks } = await getCurrentBooksFromOku()
  const { books: favBooks } = await getFavBooksFromOku()

  return (
    <>
      <Header
        title="My Bookshelf"
        subtitle="A collection of my favourite books"
      />
      <Suspense>
        {currentBooks && (
          <BookList title="Currently Reading" books={currentBooks} current />
        )}
        {favBooks && <BookList title="Favourites" books={favBooks} />}
      </Suspense>
    </>
  )
}

export default Bookshelf
