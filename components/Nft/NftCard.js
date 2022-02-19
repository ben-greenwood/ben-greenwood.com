const NftCard = ({ nft: { imageUrl, name, price } }) => (
  <div className="group border-grey-200 font-code relative w-full rounded-lg border bg-white ">
    <div className="m-2 mb-0 overflow-hidden rounded-md">
      <img src={imageUrl} layout="fill" alt={name} className="object-cover " />
    </div>
    <div className="flex items-center justify-between p-4">
      <h5 className="text-bold truncate text-sm text-gray-500">{name}</h5>
      <div className="ml-4 flex items-center text-sm text-gray-400">
        <svg
          width="1535"
          height="2500"
          viewBox="0 0 256 417"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          className="mr-1 h-3 w-3 fill-current opacity-75"
        >
          <path
            fill="#343434"
            d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
          />
          <path
            fill="#8C8C8C"
            d="M127.962 0L0 212.32l127.962 75.639V154.158z"
          />
          <path
            fill="#3C3C3B"
            d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"
          />
          <path fill="#8C8C8C" d="M127.962 416.905v-104.72L0 236.585z" />
          <path
            fill="#141414"
            d="M127.961 287.958l127.96-75.637-127.96-58.162z"
          />
          <path fill="#393939" d="M0 212.32l127.96 75.638v-133.8z" />
        </svg>
        {price}
      </div>
    </div>
  </div>
)

export default NftCard
