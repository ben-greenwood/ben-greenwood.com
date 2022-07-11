import Parser from "rss-parser"

export const getCurrentBooksFromOku = async () => {
  const feedParser = new Parser()
  const { items } = await feedParser.parseURL(
    `https://oku.club/rss/collection/1XroW`
  )

  return { books: items }
}

export const getFavBooksFromOku = async () => {
  const feedParser = new Parser()
  const { items } = await feedParser.parseURL(
    `https://oku.club/rss/collection/2jKce`
  )

  return { books: items }
}
