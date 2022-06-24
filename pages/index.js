import React from "react"
import Page from "../components/v1/Home"
import { getBooksFromOku } from "../lib/oku.js"

export default function Home({ books }) {
  return <Page books={books} />
}

export async function getServerSideProps(context) {
  const { books } = await getBooksFromOku()

  return { props: { books } }
}
