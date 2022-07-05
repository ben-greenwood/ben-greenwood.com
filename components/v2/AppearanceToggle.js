import React from "react"
import { motion } from "framer-motion"
import { useAppearance } from "utils/contexts/AppearanceContext"

const AppearanceToggle = () => {
  const { darkModeEnabled, setDarkModeEnabled } = useAppearance()
  return (
    <button
      onClick={() => setDarkModeEnabled(!darkModeEnabled)}
      className="w-11 rounded-lg border border-gray-200 p-2 text-base text-black hover:bg-gray-100 dark:border-gray-800 dark:text-white dark:hover:bg-gray-900"
    >
      <motion.span
        key={darkModeEnabled}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {darkModeEnabled ? "☀️" : "🌚"}
      </motion.span>
    </button>
  )
}

export default AppearanceToggle
