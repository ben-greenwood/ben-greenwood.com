import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import cx from "classnames"

const DragWindow = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(null)
  const [dragging, setDragging] = useState(0)
  const [startPosition, setStartPosition] = useState(0)
  const [rightPosition, setRightPosition] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  const calculateRightPosition = (eventX) => {
    const dontTransitionFromRight =
      startPosition === windowWidth && eventX > windowWidth * 0.9
    const doTransitionFromLeft =
      startPosition !== windowWidth && eventX > windowWidth * 0.1
    if (dontTransitionFromRight || doTransitionFromLeft) return windowWidth

    return 0
  }

  const handler = (_mouseDownEvent) => {
    setStartPosition(rightPosition)

    const onMouseMove = (mouseMoveEvent) => {
      setDragging(true)
      setRightPosition(mouseMoveEvent.pageX)
    }

    const onMouseUp = (mouseMoveEvent) => {
      setDragging(false)
      setRightPosition(calculateRightPosition(mouseMoveEvent.pageX))
      document.body.removeEventListener("mousemove", onMouseMove)
      document.body.removeEventListener("mouseup", onMouseUp)
    }

    document.body.addEventListener("mousemove", onMouseMove)
    document.body.addEventListener("mouseup", onMouseUp)
  }
  return (
    <motion.div
      className={cx("relative z-20", {
        ["transition-all duration-500 ease-in-out"]: !dragging,
      })}
      style={{ right: -rightPosition }}
    >
      <button
        id="draghandle"
        onMouseDown={handler}
        className={cx(
          "absolute inset-y-0 left-0 z-10 cursor-ew-resize items-center px-2 sm:flex",
          {
            ["-left-5"]: rightPosition === windowWidth,
          }
        )}
      >
        <div className="h-8 w-1.5 rounded-full bg-slate-400"></div>
      </button>
      {children}
    </motion.div>
  )
}
export default DragWindow
