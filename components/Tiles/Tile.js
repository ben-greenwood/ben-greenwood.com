import { motion } from "framer-motion"

const Tile = ({ displayChildren, controlChildren, order }) => (
  <motion.div
    animate={{ opacity: [0, 1], rotate: [-1, 0] }}
    transition={{ delay: order * 0.15 }}
    className="col-span-4 rounded-md border border-gray-200 bg-white p-4"
  >
    <div className="h-64 overflow-hidden rounded-md bg-white">
      {displayChildren}
    </div>
    <div className="mt-4">{controlChildren}</div>
  </motion.div>
)

export default Tile
