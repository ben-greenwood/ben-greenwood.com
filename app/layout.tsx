import "./globals.css"

import { Analytics } from "@vercel/analytics/react"
import BackgroundGrid from "@/components/BackgroundGrid"
import { CommandMenu } from "@/components/CommandMenu"
import { CommandMenuProvider } from "@/utils/contexts/CommandMenuContext"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import cx from "classnames"
import localFont from "next/font/local"

const magnat = localFont({
  src: "../public/fonts/magnat-text-regular.woff2",
  weight: "400",
  variable: "--font-magnat-text",
  display: "swap",
})

const swear = localFont({
  src: "../public/fonts/swear-black-cilati.ttf",
  weight: "900",
  variable: "--font-swear-cilati",
  display: "swap",
})

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://beanacre.xyz"),
  title: {
    default: "Ben Greenwood",
    template: "%s | Ben Greenwood",
  },
  description: "A home for me on the internet.",
  openGraph: {
    title: "Ben Greenwood",
    description: "A home for me on the internet.",
    url: "https://beanacre.xyz",
    siteName: "Ben Greenwood",
    images: [
      {
        url: "https://beanacre.xyz/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ben Greenwood",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CommandMenuProvider>
      <html lang="en" className={cx(magnat.variable, swear.variable)}>
        <body className={cx(inter.className, "dark")}>
          <div className="relative isolate min-h-screen overflow-hidden bg-white dark:bg-black">
            <div className="fixed inset-x-0 bottom-0 z-50 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
              <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-slate-900 px-6 py-2.5 dark:bg-white sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
                <p className="text-sm leading-6 text-white dark:text-slate-800">
                  <a href="mailto:ben.t.greenwood@gmail.com">
                    <strong className="font-semibold">
                      Available for Freelance Work
                    </strong>
                    <svg
                      viewBox="0 0 2 2"
                      className="mx-2 inline h-0.5 w-0.5 fill-current"
                      aria-hidden="true"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    Drop me a line to discuss availability&nbsp;
                    <span aria-hidden="true" className="ml-1">
                      &rarr;
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-noisy pointer-events-none absolute inset-0 z-10"></div>
            <BackgroundGrid />
            <div className="default-transition relative h-full w-full ">
              <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-between">
                <div className="min-h-screen w-full items-center py-12 sm:flex">
                  <main id="main" className="w-full px-6 py-6 lg:py-16">
                    {children}
                  </main>
                  <Analytics />
                  <CommandMenu />
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </CommandMenuProvider>
  )
}
