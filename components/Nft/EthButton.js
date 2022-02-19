import React from "react"
import Web3 from "web3"
import WalletConnectProvider from "@walletconnect/web3-provider"

const EthButton = ({ ethAddress, setEthAddress }) => {
  const provider = new WalletConnectProvider({
    infuraId: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID,
  })

  const truncateAddress = (address) => {
    return `${address.substr(0, 5)}...${address.substr(
      address.length - 5,
      address.length
    )}`
  }

  const loginWithEth = async () => {
    try {
      await provider.enable()
      const web3 = new Web3(provider)
      const accounts = await web3.eth.getAccounts()
      const ethAddress = accounts[0]
      setEthAddress(ethAddress)
    } catch (error) {
      console.error(error)
    }
  }

  const logout = () => {
    setEthAddress(null)
  }

  const loggedInButton = () => (
    <button
      onClick={() => logout()}
      className="group font-code flex items-center rounded-md bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 text-sm text-orange-900 transition-all duration-200 ease-in-out hover:from-orange-200 hover:to-red-300"
    >
      {truncateAddress(ethAddress)}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 h-4 w-4 transform group-hover:scale-105"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )

  const loggedOutButton = () => (
    <button
      className="group flex items-center rounded-md bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 text-sm text-orange-900 transition-all duration-200 ease-in-out hover:from-orange-200 hover:to-red-300"
      onClick={() => loginWithEth()}
    >
      Connect Wallet
    </button>
  )

  const Button = ethAddress ? loggedInButton : loggedOutButton
  return <Button />
}

export default EthButton
