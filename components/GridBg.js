import React from "react"
import cx from "classnames"
import useWindowSize from "utils/hooks/UseWindowSize"

const GridBg = ({ count = 3 }) => {
  const size = useWindowSize()
  const calculatedCount = size.width <= 768 ? Math.round(count / 2) : count

  return (
    <>
      <GridContainer>
        {[...Array(calculatedCount)].map((e, i) => (
          <div
            key={i}
            className="vertical-dotted-border h-full w-px animate-pulse"
          />
        ))}
      </GridContainer>
      <GridContainer horizontal>
        {[...Array(calculatedCount)].map((e, i) => (
          <div
            key={i}
            className="horizontal-dotted-border h-px w-full animate-pulse"
          />
        ))}
      </GridContainer>
    </>
  )
}

export default GridBg

const GridContainer = ({ children, horizontal = false }) => (
  <div
    className={cx("absolute flex h-full w-full justify-between opacity-50", {
      ["flex-col"]: horizontal,
    })}
  >
    <div></div>
    {children}
    <div></div>
  </div>
)
