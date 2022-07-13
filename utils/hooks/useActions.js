import React from "react"
import {
  HomeIcon,
  SunIcon,
  MoonIcon,
  BookOpenIcon,
  ColorSwatchIcon,
} from "@heroicons/react/outline"

import { TwitterIcon, GitHubIcon, DribbbleIcon } from "components/v2/Icons"

import { useRouter } from "next/router"
import { useAppearance } from "utils/contexts/AppearanceContext"

export default function useWindowSize() {
  const { setDarkModeEnabled } = useAppearance()
  const router = useRouter()

  const actions = [
    {
      id: "home",
      name: "Home",
      icon: <HomeIcon className="h-4 w-4" />,
      keywords: "back",
      perform: () => router.push("/"),
    },
    {
      id: "bookshelf",
      name: "Bookshelf",
      icon: <BookOpenIcon className="h-4 w-4" />,
      keywords: "book read",
      perform: () => router.push("/bookshelf"),
    },
    {
      id: "tools",
      name: "My Tools",
      icon: <ColorSwatchIcon className="h-4 w-4" />,
      keywords: "tools software productivity",
      perform: () => router.push("/tools"),
    },
    {
      id: "theme",
      name: "Change theme…",
      icon: <SunIcon className="h-4 w-4" />,
      keywords: "interface color dark light",
    },
    {
      id: "darkTheme",
      name: "Dark",
      icon: <MoonIcon className="h-4 w-4" />,
      perform: () => setDarkModeEnabled(true),
      parent: "theme",
      keywords: "interface color dark theme",
    },
    {
      id: "lightTheme",
      name: "Light",
      icon: <SunIcon className="h-4 w-4" />,
      perform: () => setDarkModeEnabled(false),
      parent: "theme",
      keywords: "interface color light theme",
    },
    {
      id: "twitter",
      name: "Twitter",
      keywords: "social",
      icon: <TwitterIcon className="h-4 w-4 text-black" />,
      perform: () => window.open("https://twitter.com/_beanacre", "_blank"),
    },
    {
      id: "github",
      name: "GitHub",
      keywords: "social code",
      icon: <GitHubIcon className="h-4 w-4 text-black" />,
      perform: () => window.open("https://github.com/ben-greenwood", "_blank"),
    },
    {
      id: "dribbble",
      name: "Dribbble",
      keywords: "design social",
      icon: <DribbbleIcon className="h-4 w-4 text-black" />,
      perform: () =>
        window.open("https://dribbble.com/ben-greenwood", "_blank"),
    },
  ]

  return actions
}
