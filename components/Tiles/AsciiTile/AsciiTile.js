import { useState } from "react"
import Tile from "../Tile"
import RefreshButton from "../RefreshButton"
import { motion, AnimatePresence } from "framer-motion"

const AsciiTile = ({}) => {
  const asciis = [
    "<^>(-_-)<^>    t(-_-t)    -_-*,,|,",
    "<^>(-_-)<^>    -_-*,,|,",
    "<^>(-_-)<^>    -_-*,,|,   t(-_-t)",
    "<^>(-_-)<^>    t(-_-t)    -_-*,,|,",
  ]

  const [activeAscii, setActiveAscii] = useState(asciis[0])

  const selectRandomAscii = () => {
    const ascii = asciis[Math.floor(Math.random() * asciis.length)]
    setActiveAscii(ascii)
  }

  const displayChildren = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex h-full w-full items-center justify-center rounded-md border border-gray-200 bg-gray-100"
      >
        {activeAscii}
      </motion.div>
    </AnimatePresence>
  )

  const controlChildren = (
    <div className="flex items-center justify-between">
      <h4>ASCII</h4>
      <RefreshButton handleClick={() => selectRandomAscii()} />
    </div>
  )

  return (
    <Tile displayChildren={displayChildren} controlChildren={controlChildren} />
  )
}

export default AsciiTile
