import React from "react"
import Page from "components/v2/Page"
import Bio from "components/v2/Home/Bio"
import Header from "components/v2/Home/Header"

const Home = () => {
  const head = {
    title: "Ben Greenwood",
    description: "A home for me on the internet",
  }
  return (
    <Page head={head}>
      <>
        <Header />
        <div className="mt-8">
          <Bio />
        </div>
      </>
    </Page>
  )
}

export default Home
