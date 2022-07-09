import React from "react"
import V1Page from "components/v1/Home/Home"
import { getBooksFromOku } from "lib/oku"
import DragWindow from "components/DragWindow"
import VersionHistory from "components/VersionHistory"

const Home = ({ books }) => {
  return (
    <div>
      <DragWindow>
        <div className="relative h-screen bg-white" />
      </DragWindow>

      <VersionHistory>
        <V1Page books={books} />
      </VersionHistory>
    </div>
  )
}

export async function getServerSideProps() {
  const { books } = await getBooksFromOku()

  return { props: { books } }
}

export default Home
