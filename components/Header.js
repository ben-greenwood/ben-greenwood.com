import React from "react"
import AnimatedType from "components/AnimatedType"

const Header = ({ title, subtitle, animatedStrings }) => {
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="magnat-head text-2xl font-bold text-slate-800 dark:text-slate-200 md:text-3xl">
            {title}
          </h1>
          <p className="">
            {animatedStrings && <AnimatedType strings={animatedStrings} />}
          </p>
          {subtitle && (
            <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
