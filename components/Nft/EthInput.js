import React from "react"
import Tooltip from "../Tooltip"
import { ArrowCircleRightIcon, RefreshIcon } from "@heroicons/react/solid"

const EthInput = (setEthInput, getNfts) => (
  <div className="mb-8 flex w-full items-end justify-between ">
    <div className="flex items-end">
      <div className="relative">
        <label className="font-code text-sm font-bold">
          Enter wallet address
        </label>
        <input
          type="text"
          // onChange={(e) => setEthInput(e.target.value)}
          placeholder="0x6f2..."
          className="form-input mt-1 w-full rounded-md px-4 py-2"
        />
      </div>
      <Tooltip text="Submit">
        <button
          onClick={() => getNfts(ethInput)}
          className="relative ml-1 mb-0.5 rounded-md bg-blue-600 p-2.5"
        >
          <ArrowCircleRightIcon className="h-5 w-5 fill-current text-white" />
        </button>
      </Tooltip>
    </div>
    <Tooltip text="Refresh">
      <button className="ml-1 rounded-lg border border-gray-100 bg-gray-100 p-2.5">
        <RefreshIcon className="h-5 w-5 text-gray-900" />
      </button>
    </Tooltip>
  </div>
)

export default EthInput
