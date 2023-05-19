"use client"

import {
  BookOpenIcon,
  HomeIcon,
  Square3Stack3DIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid"
import { DribbbleIcon, GitHubIcon, TwitterIcon } from "@/components/Icons"
import React, { useEffect, useRef, useState } from "react"

import { Command } from "cmdk"
import Image from "next/image"
import cx from "classnames"
import { useRouter } from "next/navigation"

export function CommandMenu() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const inputRef = useRef<HTMLInputElement | null>(null)
  const listRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current?.contains(e.target)) {
        return
      }

      setOpen(false)
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
        setOpen((o) => !o)
      }

      if (e.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const handleRedirect = (href: string) => {
    router.push(href)
    setOpen(false)
  }

  const handleOutsideRedirect = (href: string) => {
    window.open(href, "_blank")
    setOpen(false)
  }

  return (
    <div
      ref={containerRef}
      className={cx("raycast absolute w-full z-50 bottom-0 sm:top-32", {
        hidden: !open,
      })}
    >
      <Command value={value} onValueChange={(v) => setValue(v)}>
        <div cmdk-raycast-top-shine="" />
        <Command.Input
          ref={inputRef}
          autoFocus
          placeholder="Type a command or search..."
        />
        <hr cmdk-raycast-loader="" />
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
              <SwatchIcon className="h-4 w-4" />
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

        <div cmdk-raycast-footer="">
          <RaycastDarkIcon />
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
      <span cmdk-raycast-meta="">{isCommand ? "Command" : "Application"}</span>
    </Command.Item>
  )
}

function RaycastDarkIcon() {
  return (
    <svg
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M301.144 634.799V722.856L90 511.712L134.244 467.804L301.144 634.799ZM389.201 722.856H301.144L512.288 934L556.34 889.996L389.201 722.856ZM889.996 555.956L934 511.904L512.096 90L468.092 134.052L634.799 300.952H534.026L417.657 184.679L373.605 228.683L446.065 301.144H395.631V628.561H723.048V577.934L795.509 650.395L839.561 606.391L723.048 489.878V389.105L889.996 555.956ZM323.17 278.926L279.166 322.978L326.385 370.198L370.39 326.145L323.17 278.926ZM697.855 653.61L653.994 697.615L701.214 744.834L745.218 700.782L697.855 653.61ZM228.731 373.413L184.679 417.465L301.144 533.93V445.826L228.731 373.413ZM578.174 722.856H490.07L606.535 839.321L650.587 795.269L578.174 722.856Z"
        fill="#FF6363"
      />
    </svg>
  )
}
