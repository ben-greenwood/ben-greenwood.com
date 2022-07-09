import React from "react"
import cx from "classnames"

const GridBg = ({ count = 3 }) => {
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

  return (
    <>
      <GridContainer>
        {[...Array(count)].map((e, i) => (
          <div
            key={i}
            className="vertical-dotted-border h-full w-px animate-pulse"
          />
        ))}
      </GridContainer>
      <GridContainer horizontal>
        {[...Array(count)].map((e, i) => (
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
