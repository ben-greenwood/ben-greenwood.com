import { RoughNotation } from "react-rough-notation"
import useWindowSize from "../../utils/hooks/UseWindowSize"
import { motion } from "framer-motion"

const ReccomendedTextBubble = () => {
  const size = useWindowSize()

  return (
    <div className="handwriting absolute -top-16 right-4 rotate-3 transform sm:right-8 md:-top-20 lg:right-0">
      <RoughNotation
        type="circle"
        color="#000"
        show
        padding={size.width <= 768 ? [10, 20] : [20, 30]}
        strokeWidth={2}
      >
        <span className="handwriting text-lg md:text-xl">Reccomended</span>
      </RoughNotation>
      <svg
        className="mt-6 rotate-180 transform"
        xmlns="http://www.w3.org/2000/svg"
        width="85"
        height="50"
      >
        <motion.g
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          initial={{ stroke: "#fff" }}
          animate={{ stroke: "#000" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            d="M2.012 47.458c2.254-15.748 7.447-21.81 23.566-21.434 22.829.533 36.483-4.221 53.935-19.566"
          />
          <motion.path
            initial={{ pathLength: 0, stroke: "#fff" }}
            animate={{ pathLength: 1, stroke: "#000" }}
            transition={{ duration: 0.5, delay: 1 }}
            d="M80.435 14.297c-.592-4.348 2.294-7.566 2.554-11.755-2.997 1.132-9.175 3.154-12.46 2.399"
          />
        </motion.g>
      </svg>
    </div>
  )
}

export default ReccomendedTextBubble
