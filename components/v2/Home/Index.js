import React from "react"
import Head from "next/head"
import Bio from "components/v2/Home/Bio"
import GridBg from "components/v2/GridBg"
import Footer from "components/v2/Footer"
import Header from "components/v2/Home/Header"
import CommandBar from "components/v2/CommandBar/CommandBar"
import CommandBarToggle from "components/v2/CommandBar/CommandBarToggle"

export default function Home() {
  return (
    <CommandBar>
      <CommandBarToggle />
      <div className="relative bg-black">
        <GridBg />
        <Head>
          <title>Ben Greenwood</title>
          <meta name="description" content="A home for me on the internet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="relative mx-auto min-h-screen max-w-3xl">
          <main className="px-6 pt-12 md:pt-32">
            <Header />
            <div className="mt-8">
              <Bio />
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </CommandBar>
  )
}
