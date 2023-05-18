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
