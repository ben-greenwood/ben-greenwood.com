import { useState, useEffect } from 'react'
import useDarkMode from '../../utils/hooks/UseDarkMode'

const Header = () => {
  const darkModeEnabled = useDarkMode();

  const toggleDarkMode = () => {
    window.document.getElementById("root").classList.toggle("dark")
  }

  return (
    <div className="py-6 border-b border-slate-100 dark:border-slate-700 lg:pt-10 lg:pb-6">
      <div className="flex items-center justify-between mt-4">
        <div className="">
          <div className="flex items-center">
            <h1 className="text-2xl font-black md:text-4xl font-heading text-slate-800 dark:text-slate-200">
              Ben Greenwood
            </h1>
            <button
              onClick={() => toggleDarkMode()}
              className="ml-4 p-1.5 rounded bg-black text-white bg-gradient-to-b from-indigo-400 to-gray-800 dark:from-pink-400 dark:to-purple-400 dark:text-purple-100 hover:opacity-80"
            >
              {darkModeEnabled ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
          <h2 className="text-base font-semibold md:text-lg text-slate-700 dark:text-slate-300">
            Full Stack Product Engineer
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header
