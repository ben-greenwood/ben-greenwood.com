import React, { useEffect, useState } from "react"
import V1Page from "components/v1/Home/Home"
import V2Page from "components/v2/Home/Home"
import { getCurrentBooksFromOku } from "lib/oku"
import DragWindow from "components/DragWindow"
import VersionHistory from "components/VersionHistory"
import useWindowSize from "utils/hooks/UseWindowSize"
import { useDrag } from "utils/contexts/DragContext"

const Home = ({ books }) => {
  const size = useWindowSize()
  const { dragPosition } = useDrag()
  const [showVersionHistory, setShowVersionHistory] = useState(false)

  useEffect(() => {
    if (dragPosition === 0) {
      setTimeout(() => setShowVersionHistory(false), 500)
    } else {
      setShowVersionHistory(true)
    }
  }, [dragPosition])

  return (
    <>
      {size.width >= 768 ? (
        <div className="overflow-x-hidden">
          <DragWindow>
            <V2Page />
          </DragWindow>

          {showVersionHistory && (
            <VersionHistory>
              <V1Page books={books} />
            </VersionHistory>
          )}
        </div>
      ) : (
        <V2Page />
      )}
    </>
  )
}

export async function getServerSideProps() {
  const { books } = await getCurrentBooksFromOku()

  return { props: { books } }
}

export default Home
