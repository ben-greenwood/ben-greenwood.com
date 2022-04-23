import { useState, useEffect } from "react"
import Tile from "../Tile"
import RefreshButton from "../RefreshButton"
import { motion, AnimatePresence } from "framer-motion"
import { getBookReccomendationFromOku } from "../../../lib/oku.js"

const BookTile = () => {
  const [book, setBook] = useState({})

  useEffect(async () => {
    getRandomBook()
  }, [])

  const getRandomBook = async () => {
    const { book } = await getBookReccomendationFromOku()
    setBook(book)
  }

  const displayChildren = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-full w-full overflow-scroll rounded-md border border-[#ccc1b7] bg-[#fff1e5]"
      >
        <div className="author-font p-4">
          <p className="text-sm text-gray-400">{book.creator}</p>
          <h4 className="mb-4 text-2xl font-bold leading-none">{book.title}</h4>
          <p className="mb-2 text-sm text-gray-500">{book.contentSnippet}</p>
        </div>
        <div className="sticky bottom-0 left-0 h-10 w-full bg-gradient-to-b from-transparent to-[#fff1e5] opacity-75 blur"></div>
      </motion.div>
    </AnimatePresence>
  )

  const controlChildren = (
    <div className="flex items-center justify-between">
      <h4>Book Reccomendation</h4>
      <RefreshButton handleClick={() => getRandomBook()} />
    </div>
  )

  return (
    <Tile displayChildren={displayChildren} controlChildren={controlChildren} />
  )
}

export default BookTile
