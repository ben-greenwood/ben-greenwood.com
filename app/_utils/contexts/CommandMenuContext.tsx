"use client"

import React, { createContext, useCallback, useContext, useState } from "react"

export const CommandMenuContext = createContext({
  isOpen: true,
  open: () => {},
  close: () => {},
})

export const useCommandMenu = () => useContext(CommandMenuContext)

export const CommandMenuProvider = ({ children }: { children: any }) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <CommandMenuContext.Provider value={{ isOpen, open, close }}>
      {children}
    </CommandMenuContext.Provider>
  )
}
