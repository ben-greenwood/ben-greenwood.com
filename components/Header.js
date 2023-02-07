import React from "react"
import AnimatedType from "components/AnimatedType"

const Header = ({ title, subtitle, animatedStrings }) => {
  return (
    <div className="pb-4 md:pb-8">
      <div className="flex items-center justify-between">
        <div className="mt-12 md:mt-0">
          <h1 className="font-swear text-4xl font-black tracking-wide text-black dark:text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-1">
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
