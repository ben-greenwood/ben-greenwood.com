import React from "react"
import { KBarResults, useMatches } from "kbar"
import CommandBarResultItem from "./CommandBarResultItem"

function CommandBarResults() {
  const { results, rootActionId } = useMatches()

  return (
    <div className="bg-white ">
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === "string" ? (
            <div className="px-4 pt-4 pb-2 text-[10px] font-medium uppercase text-slate-700">
              {item}
            </div>
          ) : (
            <CommandBarResultItem
              action={item}
              active={active}
              currentRootActionId={rootActionId}
            />
          )
        }
      />
    </div>
  )
}

export default CommandBarResults
