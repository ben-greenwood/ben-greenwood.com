import React from "react"
import Head from "next/head"
import GridBg from "components/v2/GridBg"
import CommandBar from "components/v2/CommandBar/CommandBar"
import CommandBarToggle from "components/v2/CommandBar/CommandBarToggle"
import AppearanceToggle from "components/v2/AppearanceToggle"

const Page = ({ head, children }) => {
  return (
    <CommandBar>
      <div className="absolute top-10 right-5 z-10 flex space-x-2 md:top-5">
        <AppearanceToggle />
        <CommandBarToggle />
      </div>
      <div className="default-transition relative bg-white dark:bg-black">
        <GridBg />
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
            <main className="w-full px-6 ">{children}</main>
          </div>
        </div>
      </div>
    </CommandBar>
  )
}

export default Page
