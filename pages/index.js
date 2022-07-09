import React from "react"
import V1Page from "components/v1/Home/Home"
import { getBooksFromOku } from "lib/oku"

const Home = ({ books }) => {
  return <V1Page books={books} />
}

export async function getServerSideProps() {
  const { books } = await getBooksFromOku()

  return { props: { books } }
}

export default Home
