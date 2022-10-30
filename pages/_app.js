import React from "react"
import "../styles/globals.css"
// import "../public/css/satoshi.css"
// import "../public/css/magnat.css"
import { AppearanceProvider } from "utils/contexts/AppearanceContext"
import cx from "classnames"
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppearanceProvider>
        {({ darkModeEnabled }) => (
          <div
            className={cx({
              "dark bg-black": darkModeEnabled,
              "bg-white": !darkModeEnabled,
            })}
          >
            <Component {...pageProps} />
            <Analytics />
          </div>
        )}
      </AppearanceProvider>
    </>
  )
}

export default MyApp
