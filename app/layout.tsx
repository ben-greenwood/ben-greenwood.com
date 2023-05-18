import "./globals.css"
import "@/public/css/font.css"

import BackgroundGrid from "@/components/BackgroundGrid"
import { Inter } from "next/font/google"
import cx from "classnames"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ben Greenwood",
  description: "A home for me on the internet",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(inter.className, "dark")}>
        <div className="relative isolate min-h-screen overflow-hidden bg-white dark:bg-black">
          <div className="fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-50">
            <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-slate-900 dark:bg-white px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
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
                <main className="w-full px-6 py-6 lg:py-16">{children}</main>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
