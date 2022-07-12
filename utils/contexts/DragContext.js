import React, { createContext, useContext, useState, useEffect } from "react"

export const DragContext = createContext({
  dragPosition: true,
  setDragPosition: () => {},
  dragging: false,
  setDragging: () => {},
})

export const useDrag = () => useContext(DragContext)

export const DragProvider = ({ children }) => {
  const [dragPosition, setDragPosition] = useState(0)
  const [dragging, setDragging] = useState(0)

  return (
    <DragContext.Provider
      value={{ dragPosition, setDragPosition, dragging, setDragging }}
    >
      {children}
    </DragContext.Provider>
  )
}
