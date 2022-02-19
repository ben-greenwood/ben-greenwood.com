import React from "react"
import { XIcon } from "@heroicons/react/solid"

const EthButton = ({ ethAddress, logout, loginWithEth, loading }) => {
  const classes =
    "group font-code flex items-center rounded-md bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 text-sm text-orange-900 transition-all duration-200 ease-in-out hover:from-orange-200 hover:to-red-300"

  const truncateAddress = (address) => {
    if (address.includes(".eth")) return address

    return `${address.substr(0, 5)}...${address.substr(
      address.length - 5,
      address.length
    )}`
  }

  const renderWalletAddress = () => (
    <>
      {truncateAddress(ethAddress)}
      <XIcon className="ml-2 h-4 w-4 transform group-hover:scale-105" />
    </>
  )

  const handleClick = () => {
    ethAddress ? logout() : loginWithEth()
  }

  return (
    <button className={classes} onClick={() => handleClick()}>
      {ethAddress ? renderWalletAddress() : "Connect wallet"}
    </button>
  )
}

export default EthButton
