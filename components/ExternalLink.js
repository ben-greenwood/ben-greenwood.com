import React from "react"

const ExternalLink = ({ url, text }) => {
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
