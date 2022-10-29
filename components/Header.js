import React from "react"
import AnimatedType from "components/AnimatedType"
import HomeAscii from "components/Header/HomeAscii"
import BookshelfAscii from "components/Header/BookshelfAscii"
import ToolsAscii from "components/Header/ToolsAscii"
import { useRouter } from "next/router"

const Header = ({ subtitle, animatedStrings }) => {
  const { pathname } = useRouter()

  const title = {
    "/": <HomeAscii />,
    "/bookshelf": <BookshelfAscii />,
    "/tools": <ToolsAscii />,
  }

  return (
    <div className="pb-4 md:pb-8">
      <div className="flex items-center justify-between">
        <div className="mt-12 md:mt-0">
          {title[pathname]}
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
