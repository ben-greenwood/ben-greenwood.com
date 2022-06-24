import React from "react"
import cx from "classnames"
import Image from "next/image"
import { motion } from "framer-motion"
import { BookOpenIcon, ExternalLinkIcon } from "@heroicons/react/outline"

const Article = ({ img, title, url, className, index }) => {
  new URL(url)
  const urlHost = new URL(url).hostname
  return (
    <motion.a
      animate={{ opacity: [0, 1] }}
      transition={{ delay: index * 0.15 }}
      href={url}
      target="_blank"
      rel="noreferrer"
      className={cx(
        { className },
        "group grid grid-cols-5 overflow-hidden rounded-md border border-gray-900 bg-black p-2 transition-transform duration-200 ease-in-out hover:scale-105"
      )}
    >
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 relative w-full">
        {img ? (
          <Image
            layout="fill"
            src={img}
            alt={title}
            className="h-14 w-full overflow-hidden rounded-md object-cover object-center"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-900 text-slate-600">
            <BookOpenIcon className="h-6 w-6" />
          </div>
        )}
      </div>
      <div className="col-span-4 ml-2 p-2">
        <h3 className="truncate text-sm font-medium text-slate-300">{title}</h3>
        <span className="mt-1 flex items-center text-xs text-slate-600">
          {urlHost}
          <ExternalLinkIcon className="ml-1 h-3 w-3 stroke-current text-slate-600" />
        </span>
      </div>
    </motion.a>
  )
}

export default Article
