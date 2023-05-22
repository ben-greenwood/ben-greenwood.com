import React from "react"

type Props = {
  title: string
  subtitle?: string
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <div className="pb-4 md:pb-8">
      <div className="flex items-center justify-between">
        <div className="mt-12 md:mt-0">
          <h1 className="font-swear text-4xl font-black tracking-wide text-black dark:text-white md:text-5xl">
            {title}
          </h1>
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
