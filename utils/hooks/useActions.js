import React from "react"
import {
  HomeIcon,
  SunIcon,
  MoonIcon,
  BookOpenIcon,
  ColorSwatchIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline"

import {
  TwitterIcon,
  GitHubIcon,
  DribbbleIcon,
  MastodonIcon,
} from "components/Icons"

import { useRouter } from "next/router"
import { useAppearance } from "utils/contexts/AppearanceContext"
import Image from "next/image"

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
      id: "projects",
      name: "View Projects…",
      icon: <BriefcaseIcon className="h-4 w-4" />,
      keywords: "interface color dark light",
    },
    {
      id: "projectsSplit",
      name: "Split",
      icon: (
        <Image
          src="/static/images/icons/split.png"
          alt="Split icon"
          width="18"
          height="18"
        />
      ),
      perform: () =>
        window.open(
          "https://apps.apple.com/gb/app/split-share-the-tab/id1668137581",
          "_blank"
        ),
      parent: "projects",
      keywords: "project case study work portfolio",
    },
    {
      id: "projectsCodeStash",
      name: "Code Stash",
      icon: (
        <Image
          src="/static/images/icons/code-stash.png"
          alt="Code Stash icon"
          width="18"
          height="18"
        />
      ),
      perform: () =>
        window.open(
          "https://www.raycast.com/ben-greenwood/code-stash",
          "_blank"
        ),
      parent: "projects",
      keywords: "project case study work portfolio",
    },
    // {
    //   id: "projectsAklimate",
    //   name: "Aklimate",
    //   icon: <PencilIcon className="h-4 w-4" />,
    //   perform: () => router.push("/tools"),
    //   parent: "projects",
    //   keywords: "project case study work portfolio",
    // },
    // {
    //   id: "projectsAH",
    //   name: "Appear [Here]",
    //   icon: <PencilIcon className="h-4 w-4" />,
    //   perform: () => router.push("/tools"),
    //   parent: "projects",
    //   keywords: "project case study work portfolio AH",
    // },
    // {
    //   id: "projectsMMTM",
    //   name: "mmtm",
    //   icon: <PencilIcon className="h-4 w-4" />,
    //   perform: () => router.push("/tools"),
    //   parent: "projects",
    //   keywords: "project case study work portfolio",
    // },
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
      perform: () => window.open("https://twitter.com/bengreenwood", "_blank"),
    },
    {
      id: "mastodon",
      name: "Mastodon",
      keywords: "social",
      icon: <MastodonIcon className="h-4 w-4 text-black" />,
      perform: () =>
        window.open("https://mastodon.social/@ben_greenwood", "_blank"),
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
