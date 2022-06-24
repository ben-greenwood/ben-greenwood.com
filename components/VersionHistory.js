import React from "react"
import cx from "classnames"

/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  ClockIcon,
  PhotographIcon,
  TableIcon,
  ViewBoardsIcon,
  ViewListIcon,
} from "@heroicons/react/outline"

const VersionHistory = ({ children }) => {
  return <div className="absolute top-0 left-0 h-full w-full">{children}</div>
}

export default VersionHistory
