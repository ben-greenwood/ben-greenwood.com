import React from "react"
import { motion } from "framer-motion"
import { useAppearance } from "utils/contexts/AppearanceContext"
import { SunIcon, MoonIcon } from "@heroicons/react/outline"

const AppearanceToggle = () => {
  const { darkModeEnabled, setDarkModeEnabled } = useAppearance()

  return (
    <button
      onClick={() => setDarkModeEnabled(!darkModeEnabled)}
      className="flex w-11 items-center justify-center rounded-lg border border-slate-200 p-2 text-base text-black bg-white dark:bg-black hover:bg-slate-100 dark:border-slate-800 dark:text-white dark:hover:bg-slate-900"
    >
      <motion.span
        key={darkModeEnabled}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {darkModeEnabled ? (
          <SunIcon className="h-5 w-5 text-yellow-300" />
        ) : (
          <MoonIcon className="h-5 w-5 text-sky-800" />
        )}
      </motion.span>
    </button>
  )
}

export default AppearanceToggle
