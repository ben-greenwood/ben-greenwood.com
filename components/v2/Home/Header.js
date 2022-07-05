import React from "react"
import AnimatedType from "components/v2/AnimatedType"

const Header = () => {
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-black text-slate-700 dark:text-slate-300 md:text-4xl">
            Ben Greenwood
          </h1>
          <AnimatedType
            strings={["Food Addict", "Founding Engineer", "Product Engineer"]}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
