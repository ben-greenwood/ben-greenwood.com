import NftCard from "./NftCard"

const NftGrid = ({ nfts }) => {
  const grid = (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
      {nfts.map((nft, index) => (
        <NftCard nft={nft} key={index} />
      ))}
    </div>
  )

  const empty = <div className="relative mx-auto h-96 w-96">No NFTs here!</div>
  return nfts.length > 0 ? grid : empty
}

export default NftGrid
