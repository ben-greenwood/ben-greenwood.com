import React from "react"
import V1Page from "components/v1/Home/Home"
import V2Page from "components/v2/Home/Home"
import { getCurrentBooksFromOku } from "lib/oku"
import DragWindow from "components/DragWindow"
import VersionHistory from "components/VersionHistory"

const Home = ({ books }) => {
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

export async function getServerSideProps() {
  const { books } = await getCurrentBooksFromOku()

  return { props: { books } }
}

export default Home
