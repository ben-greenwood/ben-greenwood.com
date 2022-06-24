import React from "react"
import ExternalLink from "components/v2/ExternalLink"
import { useKBar } from "kbar"

const Bio = () => {
  const { query } = useKBar()

  return (
    <div className="prose prose-invert prose-pink max-w-none space-y-8 text-slate-300">
      <p>
        <span className="mr-1 text-lg">👋</span> I&apos;m a Product Engineer
        based in Bath UK, currently working at{" "}
        <ExternalLink url="https://appearhere.co.uk" text="Appear [ here ]" />,
        where I&apos;m helping make flexible retail more accessible.
      </p>
      <p>
        Previously, I worked at{" "}
        <ExternalLink url="https://mmtm.io" text="mmtm" /> - a small digital
        agency based out of Cheltenham - where I spent most of my time
        designing, prototyping and building web/mobile apps for companies
        spanning multiple industries from Telecoms to VR.
      </p>
      <p>
        I enjoy writing code, but my passion is in building useful products. I
        love sweating the details of a design and making each interaction as
        smooth and effortless as possible.
      </p>
      <button
        onClick={query.toggle}
        className="group relative flex items-center justify-center px-4 py-2 hover:border-green-800"
      >
        <div className="absolute h-full w-full animate-pulse rounded-lg border border-green-900 px-4 py-2 group-hover:border-green-800"></div>
        <div>
          Use <kbd className="rounded bg-gray-900 p-1 px-2 text-sm">⌘</kbd>{" "}
          <kbd className="rounded bg-gray-900 p-1 px-2 text-sm">K</kbd> to
          browse →
        </div>
      </button>
    </div>
  )
}

export default Bio
