import React from "react"
import ExternalLink from "components/v2/ExternalLink"
import { useKBar } from "kbar"

const Bio = () => {
  const { query } = useKBar()

  return (
    <div className="max-w-none font-normal text-slate-600 dark:text-slate-200">
      <p>
        I’m a <em className="magnat-text">Product Designer</em> and{" "}
        <em className="magnat-text">Full Stack Engineer</em> who enjoys tackling
        problems with a focus on simplicity, usability, and responsiveness.
      </p>
      <div className="mt-10">
        <h5 className="text-sm font-medium text-slate-500 dark:text-slate-300">
          Currently
        </h5>
        <hr className="mt-2 w-6 border-green-600" />
        <p className="mt-4">
          <em className="magnat-text">Senior Product Engineer</em> at{" "}
          <ExternalLink url="https://www.getaklimate.com" text="Aklimate" />, an
          early stage startup{" "}
          <ExternalLink
            url="https://www.ycombinator.com/companies/aklimate"
            text="(YC)"
          />{" "}
          helping industry suppliers measure and cut their carbon output.
        </p>
        <p className="mt-4">
          Previously at{" "}
          <ExternalLink url="https://appearhere.co.uk" text="Appear Here" /> and{" "}
          <ExternalLink url="https://mmtm.io" text="mmtm" />.
        </p>
      </div>

      <button
        onClick={query.toggle}
        className="default-transition group mt-10 flex items-center justify-center rounded-lg border border-slate-200 px-4 py-2 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-900"
      >
        <div>
          Use{" "}
          <kbd className="rounded bg-gray-100 p-1 px-2 text-sm transition-all duration-500 dark:bg-gray-900">
            ⌘
          </kbd>{" "}
          <kbd className="rounded bg-gray-100 p-1 px-2 text-sm transition-all duration-500 dark:bg-gray-900">
            K
          </kbd>{" "}
          to browse →
        </div>
      </button>
    </div>
  )
}

export default Bio
