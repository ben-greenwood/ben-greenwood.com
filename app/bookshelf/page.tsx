import { getCurrentBooksFromOku, getFavBooksFromOku } from "@/app/_lib/oku"

import BookList from "./_components/BookList"
import Header from "@/app/_components/Header"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
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
        <BookList title="Currently Reading" books={currentBooks} current />
      )}
      {favBooks && <BookList title="Favourites" books={favBooks} />}
    </>
  )
}

export default Bookshelf
