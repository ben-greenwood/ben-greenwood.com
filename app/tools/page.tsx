import {
  criticalTools,
  otherTools,
  productivityTools,
} from "@/utils/data/tools"

import Header from "@/components/Header"
import { Metadata } from "next"
import React from "react"
import ToolList from "./components/ToolList"

export const metadata: Metadata = {
  title: "Ben Greenwood - Tool Kit",
  description: "My internet tool kit",
}

const ToolKit = () => {
  return (
    <>
      <Header title="My Tool Kit" subtitle="My favourite apps and resources" />
      <ToolList title="Must Haves" tools={criticalTools} className="mt-6" />
      <ToolList
        title="Productivity Enhancers"
        tools={productivityTools}
        className="mt-10"
      />
      <ToolList title="The Rest" tools={otherTools} className="mt-10" />
    </>
  )
}

export default ToolKit
