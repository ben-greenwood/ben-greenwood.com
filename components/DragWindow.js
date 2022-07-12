import React, { useState } from "react"
import cx from "classnames"
import { useDrag } from "utils/contexts/DragContext"
import useWindowSize from "utils/hooks/UseWindowSize"

const DragWindow = ({ children }) => {
  const size = useWindowSize()
  const { dragPosition, setDragPosition, dragging, setDragging } = useDrag()
  const [startPosition, setStartPosition] = useState(0)

  const calculateRightPosition = (eventX) => {
    const dontTransitionFromRight =
      startPosition === size.width && eventX > size.width * 0.9
    const doTransitionFromLeft =
      startPosition !== size.width && eventX > size.width * 0.1
    if (dontTransitionFromRight || doTransitionFromLeft) return size.width

    return 0
  }

  const handler = () => {
    setStartPosition(dragPosition)

    const onMouseMove = (mouseMoveEvent) => {
      setDragging(true)
      setDragPosition(mouseMoveEvent.pageX)
    }

    const onMouseUp = (mouseMoveEvent) => {
      setDragging(false)
      setDragPosition(calculateRightPosition(mouseMoveEvent.pageX))
      document.body.removeEventListener("mousemove", onMouseMove)
      document.body.removeEventListener("mouseup", onMouseUp)
    }

    document.body.addEventListener("mousemove", onMouseMove)
    document.body.addEventListener("mouseup", onMouseUp)
  }
  return (
    <div
      className={cx("relative z-20", {
        ["transition-all duration-500 ease-in-out"]: !dragging,
      })}
      style={{ right: -dragPosition }}
    >
      <button
        id="draghandle"
        onMouseDown={handler}
        className={cx(
          "absolute inset-y-0 left-0 z-10 cursor-ew-resize items-center px-2 sm:flex",
          {
            ["-left-5"]: dragPosition === size.width,
          }
        )}
      >
        <div className="h-8 w-1.5 rounded-full bg-slate-400"></div>
      </button>
      {children}
    </div>
  )
}
export default DragWindow
