"use client"

import React, { createContext, useCallback, useContext, useState, ReactNode } from "react"

interface CommandMenuContextType {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const CommandMenuContext = createContext<CommandMenuContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
})

export const useCommandMenu = () => useContext(CommandMenuContext)

interface CommandMenuProviderProps {
  children: ReactNode
}

export const CommandMenuProvider = ({ children }: CommandMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <CommandMenuContext.Provider value={{ isOpen, open, close }}>
      {children}
    </CommandMenuContext.Provider>
  )
}
