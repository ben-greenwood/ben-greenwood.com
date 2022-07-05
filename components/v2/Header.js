import React from "react"
import AnimatedType from "components/v2/AnimatedType"

const Header = ({ title, animatedStrings }) => {
  return (
    <div className="magnat-head pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-700 dark:text-slate-300 md:text-3xl">
            {title}
          </h1>
          {animatedStrings && <AnimatedType strings={animatedStrings} />}
        </div>
      </div>
    </div>
  )
}

export default Header
