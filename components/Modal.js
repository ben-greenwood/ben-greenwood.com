import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const Modal = ({ children, show, onClick, cta }) => {
  if (!show) return null
  // Handle outside click
  // Implement transitions

  return (
    <div className="absolute top-0 left-0 h-full w-full">
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="fixed inset-0 z-10 overflow-y-auto"
          >
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-8">
                <div className="">{children}</div>
                <div className="mt-5 sm:mt-6">
                  <button
                    onClick={onClick}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                  >
                    {cta}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Modal
