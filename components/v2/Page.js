import React from "react"
import Head from "next/head"
import GridBg from "components/v2/GridBg"
import Footer from "components/v2/Footer"

const Page = ({ head, children }) => {
  return (
    <div className="relative bg-white dark:bg-black">
      <GridBg />
      <Head>
        <title>{head.title ?? "Ben Greenwood"}</title>
        <meta
          name="description"
          content={head.description ?? "A home for me on the internet"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative mx-auto min-h-screen max-w-3xl">
        <main className="px-6 pt-12 md:pt-32">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Page
