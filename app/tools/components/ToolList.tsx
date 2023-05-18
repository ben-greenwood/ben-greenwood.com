import React from "react"
import Tool from "./Tool"
import { Tool as ToolType } from "@/utils/data/tools"

export const metadata = {
  title: "Ben Greenwood - Tool Kit",
  description: "My internet tool kit",
}

type Props = {
  title: string
  tools: ToolType[]
  className?: string
}

const ToolList = ({ title, tools, className }: Props) => {
  return (
    <div className={className}>
      <h4 className="inline border-b border-black pb-1 font-magnat text-sm font-medium text-black dark:border-slate-300 dark:text-slate-200">
        {title}
      </h4>
      <div className="mt-4 grid gap-x-8 sm:grid-cols-2">
        {tools.map(({ title, icon, link, tag }, index) => (
          <Tool key={index} title={title} icon={icon} link={link} tag={tag} />
        ))}
      </div>
    </div>
  )
}

export default ToolList
