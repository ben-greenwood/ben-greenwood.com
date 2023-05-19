import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import React from "react"

type Props = {
  link: string
  title: string
  icon: string
  tag?: string
}

const Tool = ({ link, title, icon, tag }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      key={title}
      className="group flex items-center py-4"
    >
      <Image
        height="24"
        width="24"
        src={`/images/icons/${icon}.png`}
        alt={title}
        className="overflow-hidden rounded-md object-cover object-center"
      />
      <h3 className="ml-2 max-w-[45%] truncate text-sm text-slate-700 dark:text-slate-300 sm:max-w-none">
        {title}
      </h3>
      {tag && (
        <span className="ml-2 text-xs font-normal text-slate-400">{tag}</span>
      )}
      <div className="transistion-all ml-4 flex-grow border-t-2 border-dotted border-slate-200 duration-300 ease-in-out group-hover:border-green-400 dark:border-slate-700"></div>
      <ArrowRightIcon className="transistion-all ml-2 h-4 w-4 text-slate-300 duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-green-400 dark:text-slate-500" />
    </a>
  )
}

export default Tool
