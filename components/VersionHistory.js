import React, { useState } from "react"
import Modal from "components/Modal"

const VersionHistory = ({ children }) => {
  const [showModal, setShowModal] = useState(true)

  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden">
      <Modal
        cta="Look around"
        onClick={() => setShowModal(false)}
        show={showModal}
      >
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Welome to V1
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            This website has a history of each major iteration. Explore and see
            whats changed!
          </p>
        </div>
        <div className="handwriting relative mt-4 flex w-full items-center justify-between overflow-hidden">
          <div className="absolute top-5 h-[2px] w-full border border-dashed"></div>
          <div className="flex flex-col items-center">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg">
              V1
            </div>
            <span className="mt-1 text-xs">2021</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-300">
              V2
            </div>
            <span className="mt-1 text-xs text-gray-300">Latest</span>
          </div>
        </div>
      </Modal>

      {children}
    </div>
  )
}

export default VersionHistory
