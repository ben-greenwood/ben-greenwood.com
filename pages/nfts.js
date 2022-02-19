import Head from "next/head"
import { useEffect, useState } from "react"
import cacheData from "memory-cache"

import Footer from "../components/Footer"
import Header from "../components/Home/Header"
import EthConnect from "../components/Nft/EthConnect"
import NftGrid from "../components/Nft/NftGrid"
import EthInput from "../components/Nft/EthInput"
import Spinner from "../components/Spinner"

export default function Nfts() {
  const [connectedEthAddress, setConnectedEthAddress] = useState(null)
  // const [nfts, setNfts] = useState(null)
  const [loading, setLoading] = useState(null)
  const [ethInput, setEthInput] = useState(null)

  const nfts = [
    {
      imageUrl:
        "https://lh3.googleusercontent.com/l0OwzHOTRhgsZJYjDRTXbx5-EBSYPag9i2SFCob9BbgEWBubjBeg2cv8Kp3xJxMWKq0edzGbVDTwEcL76sfbuxTzUM3qVYJTZGaclw=s600",
      name: "Pidgies #2736",
      price: 0.03,
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/9MPgcPTkKRVFY6FXkZ_X_3SIDxc2TdK11on0hqyc1TyWa2zHoeyRthNmI6UBit2C1hJhNtByD4MTPCWn1QXC7rhxD7k9freV9h6N=s600",
      name: "Pidgies #5248",
      price: 0.03,
    },
    {
      imageUrl: "https://doodles.app/images/doodle_toast.png",
      name: "Doodles #0001",
      price: 12.35,
    },
    {
      imageUrl: "https://doodles.app/images/doodle_poopie.png",
      name: "Doodles #0002",
      price: 12.35,
    },
    {
      imageUrl: "https://doodles.app/images/doodle_evan.png",
      name: "Doodles #0003",
      price: 12.35,
    },
    {
      imageUrl:
        "https://s3.amazonaws.com/api.coolcatsnft.com/thumbnails/32_thumbnail.png",
      name: "Cool Cats #32",
      price: 100,
    },
    {
      imageUrl:
        "https://s3.amazonaws.com/api.coolcatsnft.com/thumbnails/0_thumbnail.png",
      name: "Cool Cats #1",
      price: 100,
    },
    {
      imageUrl: "https://www.woodiesnft.com/api/collectible/image-2752",
      name: "Woodies #2752",
      price: 0.25,
    },
    {
      imageUrl: "https://www.woodiesnft.com/api/collectible/image-2753",
      name: "Woodies #2753",
      price: 0.25,
    },
    {
      imageUrl: "https://www.woodiesnft.com/api/collectible/image-2754",
      name: "Woodies #2754",
      price: 0.25,
    },
  ]

  // useEffect(() => {
  //   if (connectedEthAddress) {
  //     getNfts(connectedEthAddress)
  //   } else if (!ethInput) {
  //     setNfts(null)
  //   }
  // }, [connectedEthAddress, ethInput])

  // const getNfts = async (address) => {
  // if (!address) return

  // try {
  //   const cachedNfts = cacheData.get(address)
  //   if (cachedNfts) return setNfts(cachedNfts)

  //   setLoading(true)

  //   // `https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=20`,
  //   const response = await fetch(
  //     "https://api.opensea.io/api/v1/assets?order_by=pk&order_direction=desc&limit=20&offset=0"
  //   )

  //   const data = await response.json()
  //   console.log(data)
  // } catch (error) {
  //   console.error(error)
  //   setLoading(false)
  // }

  // fetch(
  //   `https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=20`,
  //   options
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setLoading(false)
  //     cacheData.put(address, data.assets)
  //     setNfts(data.assets)
  //   })
  //   .catch((e) => {
  //
  //   })
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
