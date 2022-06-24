import Head from "next/head"
import Footer from "components/v1/Footer"
import Header from "components/v1/Home/Header"
import Bio from "components/v1/Home/Bio"
import ReccomendedReading from "components/v1/Home/ReccomendedReading"

export default function Home({ books }) {
  return (
    <div className="">
      <Head>
        <title>Ben Greenwood</title>
        <meta
          name="description"
          content="A place for my thoughts and experiences"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="min-h-screen bg-white dark:bg-slate-900">
        <main className="mx-auto flex max-w-7xl flex-col px-6">
          <Header />
          <div className="flex-grow gap-8 lg:grid lg:grid-cols-12">
            <div className="col-span-7 my-4 md:my-8">
              <Bio books={books} />
            </div>
            <div className="col-span-5 mt-9 border-t border-slate-100 pt-8 pb-4 lg:mt-0 lg:border-0 lg:pl-8">
              <div className="space-y-8">
                <ReccomendedReading />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </div>
  )
}
