import { KBarResults, useMatches } from "kbar"
import CommandBarResultItem from "./CommandBarResultItem"

function CommandBarResults() {
  const { results, rootActionId } = useMatches()

  return (
    <div className=" bg-white ">
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === "string" ? (
            <div style={groupNameStyle}>{item}</div>
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
