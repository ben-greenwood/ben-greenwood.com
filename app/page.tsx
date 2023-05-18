import Bio from "@/components/Home/Bio"
import Header from "@/components/Header"

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
