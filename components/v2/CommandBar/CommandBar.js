import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
} from "kbar"

import {
  BookOpenIcon,
  EmojiHappyIcon,
  HomeIcon,
} from "@heroicons/react/outline"

import CommandBarResults from "./CommandBarResults"

const CommandBar = ({ children }) => {
  const actions = [
    {
      id: "home",
      name: "Home",
      icon: <HomeIcon className="h-4 w-4" />,
      shortcut: ["h"],
      keywords: "back",
      perform: () => (window.location.pathname = "/"),
    },
    {
      id: "blog",
      name: "Blog",
      subtitle: "My weird words",
      icon: <BookOpenIcon className="h-4 w-4" />,
      shortcut: ["b"],
      keywords: "writing words",
      perform: () => (window.location.pathname = "/blog"),
    },
    {
      id: "contact",
      name: "Contact",
      icon: <EmojiHappyIcon className="h-4 w-4" />,
      shortcut: ["c"],
      keywords: "email",
      perform: () => (window.location.pathname = "/contact"),
    },
  ]

  const searchStyle = {
    padding: "12px 16px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    border: "none",
    background: "white",
    color: "black",
  }

  const positionerStyle = {
    zIndex: "50",
  }

  const animatorStyle = {
    maxWidth: "600px",
    width: "100%",
    background: "#fff",
    color: "#000",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    border: "1px solid #f3f4f6",

  }

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
