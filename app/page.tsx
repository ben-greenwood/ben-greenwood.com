import Bio from "@/app/_components/Bio"
import Header from "@/app/_components/Header"

export default function Home() {
  return (
    <>
      <Header title="Ben Greenwood" />
      <div className="mt-8">
        <Bio />
      </div>
    </>
  )
}
