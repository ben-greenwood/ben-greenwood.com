import { useState } from "react"
import { motion } from "framer-motion"
import { RefreshIcon } from "@heroicons/react/outline"

const RefreshButton = ({ handleClick }) => {
  const [rotate, setRotate] = useState(false)

  const variants = {
    rotate: { rotate: 360, transition: { duration: 0.5 } },
    stop: { y: [0, -5, 0], transition: { repeat: Infinity, repeatDelay: 3 } },
  }

  const handleInternalClick = () => {
    setRotate(true)

    setTimeout(() => {
      handleClick()
      setRotate(false)
    }, 500)
  }

  return (
    <button type="button" className="text-gray-500 ">
      <motion.div variants={variants} animate={rotate ? "rotate" : "stop"}>
        <RefreshIcon
          className="h-5 w-5"
          aria-hidden="true"
          onClick={() => handleInternalClick()}
        />
      </motion.div>
    </button>
  )
}

export default RefreshButton
