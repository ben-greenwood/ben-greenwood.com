import React from "react"
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
} from "kbar"

import {
  HomeIcon,
  SunIcon,
  MoonIcon,
  BookOpenIcon,
  ColorSwatchIcon,
} from "@heroicons/react/outline"

import CommandBarResults from "./CommandBarResults"
import { useAppearance } from "utils/contexts/AppearanceContext"
import { animatorStyle, positionerStyle, searchStyle } from "./styles"
import { useRouter } from "next/router"

const CommandBar = ({ children }) => {
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
      keywords: "dark theme",
      section: "",
      icon: <MoonIcon className="h-4 w-4" />,
      perform: () => setDarkModeEnabled(true),
      parent: "theme",
    },
    {
      id: "lightTheme",
      name: "Light",
      keywords: "light theme",
      section: "",
      icon: <SunIcon className="h-4 w-4" />,
      perform: () => setDarkModeEnabled(false),
      parent: "theme",
    },
  ]

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner style={positionerStyle}>
            <KBarAnimator style={animatorStyle}>
              <KBarSearch style={searchStyle} />
              <CommandBarResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>
    </>
  )
}

export default CommandBar
