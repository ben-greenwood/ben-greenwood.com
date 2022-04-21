import Head from "next/head"
import { useEffect, useState } from "react"
import cacheData from "memory-cache"

import Footer from "../components/Footer"
import Header from "../components/Home/Header"
import EthConnect from "../components/Nft/EthConnect"
import NftGrid from "../components/Nft/NftGrid"
import EthInput from "../components/Nft/EthInput"
import Spinner from "../components/Spinner"
import useSWR from "swr"

import { fetcher } from "../lib/utils"

export default function Nfts() {
  const [connectedEthAddress, setConnectedEthAddress] = useState(null)
  const [nfts, setNfts] = useState([])
  const [loading, setLoading] = useState(null)
  const [ethInput, setEthInput] = useState(null)

  const { data, error } = useSWR("/api/opensea", fetcher)

  console.log(data)

  // useEffect(() => {
  //   if (connectedEthAddress) {
  //     getNfts(connectedEthAddress)
  //   } else if (!ethInput) {
  //     setNfts(null)
  //   }
  // }, [connectedEthAddress, ethInput])

  // const getNfts = async (address) => {
  //   if (!address) return

  //   try {
  //     const cachedNfts = cacheData.get(address)
  //     if (cachedNfts) return setNfts(cachedNfts)

  //     setLoading(true)

  //     // `https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=20`,
  //     const response = await fetch(
  //       "https://api.opensea.io/api/v1/assets?order_by=pk&order_direction=desc&limit=20&offset=0"
  //     )

  //     const data = await response.json()

  //     console.log(data)
  //   } catch (error) {
  //     console.error(error)
  //     setLoading(false)
  //   }

  //   // fetch(
  //   //   `https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=20`,
  //   //   options
  //   // )
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     setLoading(false)
  //   //     console.log(data)
  //   //     cacheData.put(address, data.assets)
  //   //     setNfts(data.assets)
  //   //   })
  //   //   .catch((e) => {})
  // }

  return (
    <div className="">
      <Head>
        <title>BG - NFTs</title>
        <meta name="NFTs" content="A place for my thoughts and experiences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="min-h-screen dark:bg-slate-900">
        <main className="mx-auto flex max-w-7xl flex-col px-6">
          <Header title="NFTs" subTitle="View any wallet's NFT collection">
            <EthConnect
              ethAddress={connectedEthAddress}
              setEthAddress={setConnectedEthAddress}
            />
          </Header>
          <div className="my-4 md:my-8">
            <div className="flex items-center justify-between">
              <EthInput getNfts={() => {}} setEthInput={setEthInput} />
            </div>
            <Spinner show={loading} />
            {nfts && <NftGrid nfts={nfts} />}
          </div>
        </main>
        <Footer />
      </body>
    </div>
  )
}
