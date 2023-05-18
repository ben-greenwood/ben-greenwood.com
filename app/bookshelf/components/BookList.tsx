import Book from "./Book"
import { Book as BookType } from "@/lib/oku"
import React from "react"

type Props = {
  title: string
  books: BookType[]
  current?: boolean
}

const BookList = ({ title, books, current = false }: Props) => {
  return (
    <div className="mt-6">
      <h4 className="font-magnat inline border-b border-black pb-1 text-sm font-medium text-black dark:border-slate-300 dark:text-slate-200">
        {title}
      </h4>
      <div className="mt-4">
        {books.map(({ title, link, creator }) => (
          <Book
            key={title}
            title={title}
            link={link}
            creator={creator}
            current={current}
          />
        ))}
      </div>
    </div>
  )
}

export default BookList
