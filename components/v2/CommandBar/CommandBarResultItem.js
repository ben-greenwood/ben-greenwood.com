import React from "react"
import cx from "classnames"
import { ArrowSmRightIcon } from "@heroicons/react/outline"

const CommandBarResultItem = ({ action, active }) => {
  const parent = action.ancestors[0]

  return (
    <div
      style={{
        padding: "12px 16px",
      }}
      className={cx("flex cursor-pointer items-center justify-between", {
        ["bg-gray-100"]: active,
      })}
    >
      <div className="flex items-center gap-4 text-sm">
        {action.icon && action.icon}
        <div className="flex items-center">
          {parent && (
            <span className="mr-2 flex items-center text-xs text-gray-400">
              {parent.name}
              <ArrowSmRightIcon className="ml-1 h-4 w-4 stroke-current" />
            </span>
          )}
          <span>{action.name}</span>
        </div>
        {action.subtitle && (
          <span className="text-xs text-gray-400">{action.subtitle}</span>
        )}
      </div>
    </div>
  )
}

export default CommandBarResultItem