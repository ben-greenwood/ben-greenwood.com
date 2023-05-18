import {
  criticalTools,
  otherTools,
  productivityTools,
} from "@/utils/data/tools"

import Header from "@/components/Header"
import React from "react"
import Tool from "@/components/ToolKit/Tool"

export const metadata = {
  title: "Ben Greenwood - Tool Kit",
  description: "My internet tool kit",
}

const ToolKit = () => {
  return (
    <>
      <Header title="My Tool Kit" subtitle="My favourite apps and resources" />
      <div className="mt-6">
        <h4 className="magnat-text inline border-b border-black pb-1 text-sm font-medium text-black dark:border-slate-300 dark:text-slate-200">
          Must Haves
        </h4>
        <div className="mt-4 grid gap-x-6 sm:grid-cols-2">
          {criticalTools.map(({ title, icon, link, tag }, index) => (
            <Tool key={index} title={title} icon={icon} link={link} tag={tag} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h4 className="magnat-text inline border-b border-black pb-1 text-sm text-black dark:border-slate-200 dark:text-slate-200">
          Productivity Enhancers
        </h4>
        <div className="mt-4 grid gap-x-6 sm:grid-cols-2">
          {productivityTools.map(({ title, icon, link, tag }, index) => (
            <Tool key={index} title={title} icon={icon} link={link} tag={tag} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h4 className="magnat-text inline border-b border-black pb-1 text-sm text-black dark:border-slate-200 dark:text-slate-200">
          The Rest
        </h4>
        <div className="mt-4 grid gap-x-6 sm:grid-cols-2">
          {otherTools.map(({ title, icon, link, tag }, index) => (
            <Tool key={index} title={title} icon={icon} link={link} tag={tag} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ToolKit
