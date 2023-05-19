"use client"

import {
  BookOpenIcon,
  HomeIcon,
  Square3Stack3DIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid"
import { DribbbleIcon, GitHubIcon, TwitterIcon } from "@/components/Icons"
import React, { useContext, useEffect, useRef, useState } from "react"

import { Command } from "cmdk"
import { CommandMenuContext } from "@/utils/contexts/CommandMenuContext"
import Image from "next/image"
import cx from "classnames"
import { useRouter } from "next/navigation"

export function CommandMenu() {
  const { isOpen, open, close } = useContext(CommandMenuContext)

  const router = useRouter()
  const [value, setValue] = useState("")

  const inputRef = useRef<HTMLInputElement | null>(null)
  const listRef = useRef(null)
  const containerRef = useRef<any>(null)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      document.getElementById("main")?.classList.add("blur-bg")
    } else {
      document.getElementById("main")?.classList.remove("blur-bg")
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current?.contains(e.target)) {
        return
      }

      close()
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        e.preventDefault()

        if (isOpen) {
          return close()
        }

        open()
      }

      if (e.key === "Escape") {
        close()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const handleRedirect = (href: string) => {
    router.push(href)
    close()
  }

  const handleOutsideRedirect = (href: string) => {
    window.open(href, "_blank")
    close()
  }

  return (
    <div
      className={cx("raycast absolute bottom-0 z-50 w-full sm:top-32", {
        hidden: !isOpen,
      })}
    >
      <Command
        value={value}
        onValueChange={(v) => setValue(v)}
        ref={containerRef}
      >
        <Command.Input
          ref={inputRef}
          autoFocus
          placeholder="Type a command or search..."
        />
        <hr className="cmdk-raycast-loader" />
        <Command.List ref={listRef}>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Pages">
            <Item value="Home" onSelect={() => handleRedirect("/")}>
              <HomeIcon className="h-4 w-4" />
              Home
            </Item>
            <Item
              value="Bookshelf"
              onSelect={() => handleRedirect("/bookshelf")}
            >
              <BookOpenIcon className="h-4 w-4" />
              Bookshelf
            </Item>
            <Item value="Tool Kit" onSelect={() => handleRedirect("/tools")}>
              <WrenchScrewdriverIcon className="h-4 w-4" />
              Tool Kit
            </Item>
          </Command.Group>
          <Command.Group heading="Projects">
            <Item
              isCommand
              value="Split"
              onSelect={() =>
                handleOutsideRedirect(
                  "https://apps.apple.com/gb/app/split-share-the-tab/id1668137581"
                )
              }
            >
              <Image
                alt="Split Icon"
                src="/images/icons/split.png"
                className="h-4 w-4"
                height={16}
                width={16}
              />
              Split
            </Item>
            <Item
              isCommand
              value="Code Stash"
              onSelect={() =>
                handleOutsideRedirect(
                  "https://www.raycast.com/ben-greenwood/code-stash"
                )
              }
            >
              <Image
                alt="Code Stash"
                src="/images/icons/code-stash.png"
                className="h-4 w-4"
                height={16}
                width={16}
              />
              Code Stash
            </Item>
          </Command.Group>
          <Command.Group heading="Social">
            <Item
              isCommand
              value="Twitter"
              onSelect={() =>
                handleOutsideRedirect("https://twitter.com/bengreenwood")
              }
            >
              <TwitterIcon className="h-4 w-4" />
              Twitter
            </Item>
            <Item
              isCommand
              value="GitHub"
              onSelect={() =>
                handleOutsideRedirect("https://github.com/ben-greenwood")
              }
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Item>
            <Item
              isCommand
              value="Dribbble"
              onSelect={() =>
                handleOutsideRedirect("https://dribbble.com/ben-greenwood")
              }
            >
              <DribbbleIcon className="h-4 w-4" />
              Dribbble
            </Item>
            <Item
              isCommand
              value="Layers"
              onSelect={() =>
                handleOutsideRedirect("https://layers.to/bengreenwood")
              }
            >
              <Square3Stack3DIcon className="h-4 w-4" />
              Layers
            </Item>
          </Command.Group>
        </Command.List>

        <div className="cmdk-raycast-footer">
          <Image
            alt="B Logo"
            src="/images/icons/b.png"
            className="ml-0.5 h-6 w-6"
            height={16}
            width={16}
          />
        </div>
      </Command>
    </div>
  )
}

function Item({
  children,
  value,
  isCommand = false,
  onSelect,
}: {
  children: React.ReactNode
  value: string
  isCommand?: boolean
  onSelect?: () => void
}) {
  return (
    <Command.Item value={value} onSelect={onSelect}>
      {children}
      {/* <span cmdk-raycast-meta="">{isCommand ? "Command" : "Application"}</span> */}
    </Command.Item>
  )
}
