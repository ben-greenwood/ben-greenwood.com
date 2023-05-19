"use client"

import React, { useState } from "react"

import BinaryAnimation from "@/components/BinaryAnimation"
import ExternalLink from "@/components/ExternalLink"

const Bio = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="max-w-none font-normal text-slate-600 dark:text-slate-200">
      <p>
        I’m a <em className="font-magnat">Product Designer</em> and{" "}
        <em className="font-magnat">Full Stack Engineer</em> who enjoys tackling
        problems with a focus on simplicity, usability, and responsiveness.
      </p>
      <div className="mt-10">
        <h5 className="text-sm font-medium text-slate-500 dark:text-slate-300">
          Currently
        </h5>
        <hr className="mt-2 w-6 border-indigo-600" />
        <p className="mt-4">
          <em className="font-magnat">Senior Product Engineer</em> at{" "}
          <ExternalLink url="https://www.getaklimate.com" text="Aklimate" />, an
          early stage startup{" "}
          <ExternalLink
            url="https://www.ycombinator.com/companies/aklimate"
            text="(YC)"
          />{" "}
          helping industry suppliers measure and cut their carbon output.
        </p>
        <p className="mt-4">
          Previously,{" "}
          <ExternalLink url="https://appearhere.co.uk" text="Appear Here" /> and{" "}
          <ExternalLink url="https://mmtm.io" text="mmtm" />.
        </p>
      </div>

      <button
        // onClick={query.toggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="default-transition group group relative mt-10 flex items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm hover:border-slate-300 dark:border-slate-700 dark:bg-black dark:hover:border-slate-700 "
      >
        {hovered && <BinaryAnimation className="absolute" />}
        <div className="relative z-10">
          Use{" "}
          <kbd className="rounded bg-slate-100 p-1 px-2 text-xs transition-all duration-500 group-hover:bg-slate-200 dark:bg-slate-900 dark:group-hover:bg-slate-700">
            ⌘
          </kbd>{" "}
          <kbd className="rounded bg-slate-100 p-1 px-2 text-xs transition-all duration-500 group-hover:bg-slate-200 dark:bg-slate-900 dark:group-hover:bg-slate-700">
            K
          </kbd>{" "}
          to browse →
        </div>
      </button>
    </div>
  )
}

export default Bio
