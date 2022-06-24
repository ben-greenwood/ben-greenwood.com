import React from "react"
import V1Page from "../components/v1/Home"
import V2Page from "../components/v2/Home"
import { getBooksFromOku } from "../lib/oku.js"

export default function Home({ books, version = "v2" }) {
  return version === "v2" ? <V2Page /> : <V1Page books={books} />
}

export async function getServerSideProps(context) {
  const { books } = await getBooksFromOku()

  return { props: { books } }
}
