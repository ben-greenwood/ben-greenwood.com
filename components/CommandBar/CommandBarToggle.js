import React, { useEffect, useRef, useState, useCallback } from "react"
import { useKBar } from "kbar"

const CommandBarToggle = () => {
  const { query } = useKBar()
  const [activeKeys, setActiveKeys] = useState([])
  const cmdRef = useRef()
  const kRef = useRef()

  const handleKeyDown = useCallback(
    (e) => {
      const pressedKeys = activeKeys.includes(e.key)
        ? activeKeys
        : [...activeKeys, e.key]

      setActiveKeys(pressedKeys)
    },
    [activeKeys]
  )

  const handleKeyUp = useCallback(() => {
    setActiveKeys([])
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [activeKeys, handleKeyDown, handleKeyUp])

  return (
    <button
      onClick={query.toggle}
      className="rounded-lg border border-slate-200 p-2 text-base text-black hover:bg-slate-100 dark:border-slate-800 dark:text-white dark:hover:bg-slate-900"
    >
      <span ref={cmdRef}>⌘</span>
      <span ref={kRef}>K</span>
    </button>
  )
}

export default CommandBarToggle
