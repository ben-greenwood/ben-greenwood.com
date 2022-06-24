import React from "react"
import cx from "classnames"

const CommandBarResultItem = ({ action, active, currentRootActionId }) => {
  const ancestors = React.useMemo(() => {
    if (!currentRootActionId) return action.ancestors
    const index = action.ancestors.findIndex(
      (ancestor) => ancestor.id === currentRootActionId
    )
    // +1 removes the currentRootAction; e.g.
    // if we are on the "Set theme" parent action,
    // the UI should not display "Set theme… > Dark"
    // but rather just "Dark"
    return action.ancestors.slice(index + 1)
  }, [action.ancestors, currentRootActionId])

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
      {action.shortcut?.length ? (
        <div aria-hidden className="grid grid-flow-col gap-2">
          {action.shortcut.map((sc) => (
            <kbd
              key={sc}
              className="rounded bg-gray-200 bg-opacity-90 px-2 py-1 text-xs"
            >
              {sc}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default CommandBarResultItem
