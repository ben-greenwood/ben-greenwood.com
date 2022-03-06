import Parser from "rss-parser"

export const getBooksFromOku = async () => {
  const feedParser = new Parser()
  const { items } = await feedParser.parseURL(
    `https://oku.club/rss/collection/1XroW`
  )

  return { books: items }
}
