import { useState } from "react"
import Tile from "../Tile"
import RefreshButton from "../RefreshButton"

const GradientTile = ({ order }) => {
  const gradients = [
    "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)",
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
    "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
    "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",
  ]

  const [activeGradient, setActiveGradient] = useState(
    gradients[Math.floor(Math.random() * gradients.length)]
  )

  const selectRandomGradient = () => {
    const gradient = gradients[Math.floor(Math.random() * gradients.length)]
    setActiveGradient(gradient)
  }

  const displayChildren = (
    <div className="h-full w-full" style={{ background: activeGradient }}></div>
  )

  const controlChildren = (
    <div className="flex items-center justify-between">
      <h4>Obligatory gradient tile</h4>
      <RefreshButton handleClick={() => selectRandomGradient()} />
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

export default GradientTile
