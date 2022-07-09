import React from "react"
import cx from "classnames"

const CommandBarResultItem = ({ action, active }) => {
  return (
    <div
      className={cx(
        "flex cursor-pointer items-center justify-between px-4 py-2",
        { ["bg-gray-100"]: active }
      )}
    >
      <div className="flex items-center gap-4 text-sm">
        {action.icon && action.icon}
        <span>{action.name}</span>
        {action.subtitle && (
          <span className="text-xs text-gray-400">{action.subtitle}</span>
        )}
      </div>
    </div>
  )
}

export default CommandBarResultItem
