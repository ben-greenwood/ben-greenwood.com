import React from "react"
import Page from "components/v2/Page"
import Header from "components/v2/Header"

const Bookshelf = () => {
  const head = {
    title: "Ben Greenwood - Bookshelf",
    description: "My internet bookshelf",
  }

  return (
    <Page head={head}>
      <>
        <Header title="My Bookshelf" />
        <div className="mt-8 space-y-4">
          <div className="h-20 w-full rounded border border-gray-800"></div>
          <div className="h-20 w-full rounded border border-gray-800"></div>
          <div className="h-20 w-full rounded border border-gray-800"></div>
        </div>
      </>
    </Page>
  )
}

export default Bookshelf
