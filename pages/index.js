import Bio from "components/Home/Bio"
import Header from "components/Header"
import Page from "components/Page"
import React from "react"

const Home = () => {
  const head = {
    title: "Ben Greenwood",
    description: "A home for me on the internet",
  }

  const animatedStrings = [
    "Food Addict",
    "Chief Coffee Analyst",
    "Founding Engineer",
    "Product Engineer",
  ]

  return (
    <Page head={head}>
      <>
        <Header animatedStrings={animatedStrings} title="Ben Greenwood" />
        <div className="mt-8">
          <Bio />
        </div>
      </>
    </Page>
  )
}

export default Home
