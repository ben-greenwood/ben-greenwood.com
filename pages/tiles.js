import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Home/Header"

import GradientTile from "../components/Tiles/GradientTile/GradientTile"
import AsciiTile from "../components/Tiles/AsciiTile/AsciiTile"
import BookTile from "../components/Tiles/BookTile/BookTile"
import GifTile from "../components/Tiles/GifTile/GifTile"
import WeatherTile from "../components/Tiles/WeatherTile/WeatherTile"

export default function Home({ books }) {
  return (
    <div className="">
      <Head>
        <title>Ben Greenwood | Tiles wtf?</title>
        <meta name="description" content="Tiles | wtf even is that?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="min-h-screen bg-white dark:bg-slate-900">
        <main className="mx-auto flex max-w-7xl flex-col px-6">
          <Header title="Tiles" subtitle="wtf is a tile and why?" />
          <div className="grid flex-grow gap-8 lg:grid-cols-12">
            <GradientTile order={1} />
            <AsciiTile order={2} />
            <BookTile order={3} />
            <GifTile order={4} />
            <WeatherTile order={5} />
          </div>
        </main>
        <Footer />
      </body>
    </div>
  )
}

export async function getServerSideProps(context) {
  return { props: {} }
}
