import { motion } from "framer-motion"
import React from "react"
import cx from "classnames"

export default function BinaryAnimation({ className }) {
  return (
    <div className={cx("flex items-center space-x-4", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -16 }}
        transition={{ duration: 0.5 }}
        className="w-[14px] break-words text-center text-xs tabular-nums text-indigo-400/20"
      >
        01010
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 16 }}
        transition={{ duration: 0.5 }}
        className="w-[14px] break-words text-center text-xs tabular-nums text-indigo-400/40"
      >
        10101
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -16 }}
        transition={{ duration: 0.5 }}
        className="w-[14px] break-words text-center text-xs tabular-nums text-indigo-400/30"
      >
        01010
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 16 }}
        transition={{ duration: 0.5 }}
        className="w-[14px] break-words text-center text-xs tabular-nums text-indigo-400/20"
      >
        10101
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -16 }}
        transition={{ duration: 0.5 }}
        className="w-[14px] break-words text-center text-xs tabular-nums text-indigo-400/20"
      >
        01010
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 16 }}
        transition={{ duration: 0.5 }}
        className="w-[14px] break-words text-center text-xs tabular-nums text-indigo-400/10"
      >
        10101
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -16 }}
        transition={{ duration: 0.5 }}
        className="w-[14px] break-words text-center text-xs tabular-nums text-indigo-400/20"
      >
        01010
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 16 }}
        transition={{ duration: 0.5 }}
        className="w-[14px] break-words text-center text-xs tabular-nums text-indigo-400/30"
      >
        10101
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -16 }}
        transition={{ duration: 0.5 }}
        className="w-[14px] break-words text-center text-xs tabular-nums text-indigo-400/40"
      >
        01010
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 16 }}
        transition={{ duration: 0.5 }}
        className="w-[14px] break-words text-center text-xs tabular-nums text-indigo-400/10"
      >
        10101
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -16 }}
        transition={{ duration: 0.5 }}
        className="w-[14px] break-words text-center text-xs tabular-nums text-indigo-400/30"
      >
        01010
      </motion.div>
    </div>
  )
}
