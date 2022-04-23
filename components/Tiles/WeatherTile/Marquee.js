import React from "react"
import { motion } from "framer-motion"
import cx from "classnames"

const marqueeVariants = {
  animate: {
    x: [0, -1036],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
}

const Marquee = ({ text, fill = false, size = "xl" }) => {
  return (
    <div className="w-[1000%] truncate">
      <motion.div
        className={cx({ track: !fill })}
        variants={marqueeVariants}
        animate="animate"
      >
        <h1
          className={cx(
            "author-font font-bold uppercase leading-none text-[#f4955c]",
            {
              "text-9xl": size == "xl",
              "text-xl": size == "sm",
            }
          )}
        >
          {[...Array(100)].map((_, i) => (
            <span key={i} className="ml-12">
              {text}
            </span>
          ))}
        </h1>
      </motion.div>
    </div>
  )
}

export default Marquee
