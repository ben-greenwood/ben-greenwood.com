import { useState, useEffect } from "react"
import Tile from "../Tile"
import RefreshButton from "../RefreshButton"
import { Gif } from "@giphy/react-components"
import { GiphyFetch } from "@giphy/js-fetch-api"

const GiphyTile = ({ order }) => {
  const [gif, setGif] = useState(null)

  const gf = new GiphyFetch("34OyQm40BJDu8YX8hoZdbUEeo17kVWbY")

  useEffect(async () => {
    getRandomGif()
  }, [])

  const getRandomGif = async () => {
    const offset = Math.floor(Math.random() * 100)
    const { data } = await gf.trending({ offset, limit: 1 })

    setGif(data[0])
  }

  const displayChildren = (
    <div className="relative h-full w-full overflow-scroll rounded-md border bg-white">
      {gif && <Gif gif={gif} width="100%" height="100%" />}
    </div>
  )

  const controlChildren = (
    <div className="flex items-center justify-between">
      <h4>A GIF, why not?</h4>
      <RefreshButton handleClick={() => getRandomGif()} />
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

export default GiphyTile
