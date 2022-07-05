import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
} from "kbar"

import {
  BookOpenIcon,
  HomeIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline"

import CommandBarResults from "./CommandBarResults"
import { useAppearance } from "utils/contexts/AppearanceContext"
import { animatorStyle, positionerStyle, searchStyle } from "./styles"

const CommandBar = ({ children }) => {
  const { darkModeEnabled, setDarkModeEnabled } = useAppearance()
  const actions = [
    {
      id: "home",
      name: "Home",
      icon: <HomeIcon className="h-4 w-4" />,
      keywords: "back",
      perform: () => (window.location.pathname = "/"),
    },
    {
      id: "bookshelf",
      name: "Bookshelf",
      icon: <BookOpenIcon className="h-4 w-4" />,
      keywords: "book read",
      perform: () => (window.location.pathname = "/bookshelf"),
    },
    {
      id: "toggle_appearance",
      name: "Toggle appearance",
      icon: darkModeEnabled ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      ),
      keywords: "dark light appearance",
      perform: () => setDarkModeEnabled(!darkModeEnabled),
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
