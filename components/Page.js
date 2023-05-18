import React from "react"
import Head from "next/head"
import CommandBar from "components/CommandBar/CommandBar"
import CommandBarToggle from "components/CommandBar/CommandBarToggle"
import AppearanceToggle from "components/AppearanceToggle"
import BackgroundGrid from "./BackgroundGrid"

const Page = ({ head, children }) => {
  return (
    <CommandBar>
      <div className="absolute top-10 right-5 z-20 flex space-x-2 md:top-5">
        <AppearanceToggle />
        <CommandBarToggle />
      </div>
      <div className="relative isolate min-h-screen overflow-hidden bg-white dark:bg-black">
        <div className="fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-50">
          <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-slate-900 dark:bg-white px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
            <p className="text-sm leading-6 text-white dark:text-slate-800">
              <a href="mailto:ben.t.greenwood@gmail.com">
                <strong className="font-semibold">
                  Available for Freelance Work
                </strong>
                <svg
                  viewBox="0 0 2 2"
                  className="mx-2 inline h-0.5 w-0.5 fill-current"
                  aria-hidden="true"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                Drop me a line to discuss availability&nbsp;
                <span aria-hidden="true" className="ml-1">
                  &rarr;
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className="bg-noisy pointer-events-none absolute inset-0 z-10"></div>
        <BackgroundGrid />
        <div className="default-transition relative h-full w-full ">
          <Head>
            <title>{head.title ?? "Ben Greenwood"}</title>
            <meta
              name="description"
              content={head.description ?? "A home for me on the internet"}
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-between">
            <div className="min-h-screen w-full items-center py-12 sm:flex">
              <main className="w-full px-6 py-6 lg:py-16">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </CommandBar>
  )
}

export default Page
