import React from "react"
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
} from "kbar"

import CommandBarResults from "./CommandBarResults"
import { animatorStyle, positionerStyle, searchStyle } from "./styles"
import useActions from "utils/hooks/useActions"

const CommandBar = ({ children }) => {
  const actions = useActions()
  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner style={positionerStyle}>
            <KBarAnimator style={animatorStyle}>
              <KBarSearch style={searchStyle} />
              <CommandBarResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>
    </>
  )
}

export default CommandBar
