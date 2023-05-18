import React from "react"

type Props = {
  url: string
  text: string
}

const ExternalLink = ({ url, text }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="underline underline-offset-2 transition-opacity duration-200 ease-in-out hover:opacity-75"
    >
      {text}
    </a>
  )
}

export default ExternalLink
