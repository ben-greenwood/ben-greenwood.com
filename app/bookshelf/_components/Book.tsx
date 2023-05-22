import { ArrowRightIcon } from "@heroicons/react/24/outline"
import React from "react"
import cx from "classnames"

type Props = {
  link: string
  title: string
  creator: string
  current: boolean
}

const Book = ({ link, title, creator, current }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      key={title}
      className="group flex items-center py-4"
    >
      <h3 className="max-w-[45%] truncate text-sm text-slate-700 dark:text-slate-300 sm:max-w-none">
        {title}
      </h3>
      <span
        className={cx("ml-2 text-xs font-normal ", {
          "text-pink-400": current,
          "text-blue-400": !current,
        })}
      >
        {creator}
      </span>
      <div
        className={cx(
          "transistion-all ml-4 flex-grow border-t-2 border-dotted border-slate-200 duration-300 ease-in-out dark:border-slate-800",
          {
            "group-hover:border-pink-400 ": current,
            "group-hover:border-blue-400 ": !current,
          }
        )}
      ></div>
      <ArrowRightIcon
        className={cx(
          "transistion-all ml-2 h-4 w-4 text-slate-300 duration-300 ease-in-out group-hover:translate-x-2 dark:text-slate-500",
          {
            "group-hover:text-pink-400": current,
            "group-hover:text-blue-400": !current,
          }
        )}
      />
    </a>
  )
}

export default Book
