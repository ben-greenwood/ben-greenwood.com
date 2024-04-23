import "./globals.css"

import { Analytics } from "@vercel/analytics/react"
import BackgroundGrid from "@/app/_components/BackgroundGrid"
import { CommandMenu } from "@/app/_components/CommandMenu"
import { CommandMenuProvider } from "@/app/_utils/contexts/CommandMenuContext"
import CommandMenuToggle from "@/app/_components/CommandMenuToggle"
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
        <body className={cx(inter.className, "dark bg-black")}>
          <div className="absolute right-5 top-10 z-20 flex space-x-2 md:top-5">
            <CommandMenuToggle />
          </div>
          <div className="relative isolate min-h-screen overflow-hidden bg-white dark:bg-black">
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
