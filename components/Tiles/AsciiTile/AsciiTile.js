import { useState } from "react"
import Tile from "../Tile"
import RefreshButton from "../RefreshButton"

const AsciiTile = ({ order }) => {
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
    <div className="flex h-full w-full items-center justify-center rounded-md border border-gray-200 bg-gray-100">
      {activeAscii}
    </div>
  )

  const controlChildren = (
    <div className="flex items-center justify-between">
      <h4>ASCII</h4>
      <RefreshButton handleClick={() => selectRandomAscii()} />
    </div>
  )

  return (
    <Tile
      displayChildren={displayChildren}
      controlChildren={controlChildren}
      order={order}
    />
  )
}

export default AsciiTile
