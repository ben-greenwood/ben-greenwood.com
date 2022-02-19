import React, { useState } from "react"
import Web3 from "web3"
import WalletConnectProvider from "@walletconnect/web3-provider"
import namehash from "@ensdomains/eth-ens-namehash"
import EthButton from "./EthButton"

const EthConnect = ({ ethAddress, setEthAddress }) => {
  const [loading, setLoading] = useState(false)
  const provider = new WalletConnectProvider({
    infuraId: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID,
  })

  const lookupEns = async (web3, ethAddress) => {
    try {
      const lookup = ethAddress.toLowerCase().substr(2) + ".addr.reverse"
      const resolverContract = await web3.eth.ens.resolver(lookup)
      const nh = namehash.hash(lookup)
      return await resolverContract.methods.name(nh).call()
    } catch (e) {
      return undefined
    }
  }

  const loginWithEth = async () => {
    try {
      setLoading(true)
      await provider.enable()
      const web3 = new Web3(provider)
      const accounts = await web3.eth.getAccounts()
      const ethAddress = accounts[0]
      const ens = await lookupEns(web3, ethAddress)
      setEthAddress(ens || ethAddress)
    } catch (error) {
      alert("Unabe to connect to your wallet")
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    provider.disconnect()
    setEthAddress(null)
  }

  return (
    <EthButton
      loading={loading}
      logout={logout}
      loginWithEth={loginWithEth}
      ethAddress={ethAddress}
    />
  )
}

export default EthConnect
