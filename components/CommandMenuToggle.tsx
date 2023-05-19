"use client"

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import React, { useContext } from "react"

import { CommandMenuContext } from "@/utils/contexts/CommandMenuContext"

const CommandMenuToggle = () => {
  const { isOpen, open: openCommandMenu } = useContext(CommandMenuContext)

  const handleClick = () => {
    if (!isOpen) {
      openCommandMenu()
    }
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-lg border border-slate-200 bg-white p-2 text-base text-black hover:bg-slate-100 dark:border-slate-800 dark:bg-black dark:text-white dark:hover:bg-slate-900"
    >
      {!isOpen ? (
        <Bars3Icon className="h-5 w-5 stroke-2 text-white" />
      ) : (
        <XMarkIcon className="h-5 w-5 stroke-2 text-white" />
      )}
    </button>
  )
}

export default CommandMenuToggle
