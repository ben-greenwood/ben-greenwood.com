import React from "react"
import "../styles/globals.css"
import "../public/css/satoshi.css"
import "../public/css/magnat.css"
import { useEffect } from "react"
import Script from "next/script"
import { useRouter } from "next/router"
import * as gtag from "../lib/gtag"
import { AppearanceProvider } from "utils/contexts/AppearanceContext"
import { DragProvider } from "utils/contexts/DragContext"
import cx from "classnames"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <DragProvider>
        <AppearanceProvider>
          {({ darkModeEnabled }) => (
            <div
              className={cx({
                "dark bg-black": darkModeEnabled,
                "bg-white": !darkModeEnabled,
              })}
            >
              <Component {...pageProps} />
            </div>
          )}
        </AppearanceProvider>
      </DragProvider>
    </>
  )
}

export default MyApp
