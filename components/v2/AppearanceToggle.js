import React, { useState } from "react"
import { motion } from "framer-motion"

const AppearanceToggle = () => {
  const [darkModeEnabled, seDarkModeEnabled] = useState(true)
  const handleClick = () => {
    document.getElementById("app").classList.toggle("dark")
    seDarkModeEnabled(!darkModeEnabled)
  }

  return (
    <button
      onClick={handleClick}
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
