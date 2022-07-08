import React from "react"
import { ArrowRightIcon } from "@heroicons/react/outline"
import cx from "classnames"

const Book = ({ link, title, creator, current }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      key={title}
      className="group flex items-center py-4"
    >
      <h3 className="text-sm text-slate-700 dark:text-slate-300">{title}</h3>
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
          "ml-4 flex-grow border-t-2 border-dotted border-slate-200 transition-all duration-500 ease-in-out dark:border-slate-800",
          {
            "group-hover:border-pink-400 ": current,
            "group-hover:border-blue-400 ": !current,
          }
        )}
      ></div>
      <ArrowRightIcon
        className={cx(
          "ml-2 h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-2 dark:text-slate-500",
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
