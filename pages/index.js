import React from "react"
import V1Page from "@components/v1/Home"
import V2Page from "@components/v2/Home"
import { getCurrentBooksFromOku } from "lib/oku.js"
import DragWindow from "@components/DragWindow"
import VersionHistory from "@components/VersionHistory"

export default function Home({ books }) {
  return (
    <div>
      <DragWindow>
        <V2Page />
      </DragWindow>

      <VersionHistory>
        <V1Page books={books} />
      </VersionHistory>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { books } = await getCurrentBooksFromOku()

  return { props: { books } }
}
