import Parser from "rss-parser"

export type Book = {
  title: string
  link: string
  creator: string
}

export const getCurrentBooksFromOku = async () => {
  const feedParser = new Parser()
  const { items } = await feedParser.parseURL(
    `https://oku.club/rss/collection/1XroW`
  )

  return { books: items as Book[] }
}

export const getFavBooksFromOku = async () => {
  const feedParser = new Parser()
  const { items } = await feedParser.parseURL(
    `https://oku.club/rss/collection/2jKce`
  )

  return { books: items as Book[] }
}
