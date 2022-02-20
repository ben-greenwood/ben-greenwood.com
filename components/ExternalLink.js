const ExternalLink = ({ url, text }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="wavy underline underline-offset-4 transition-opacity duration-200 ease-in-out hover:opacity-75"
    >
      {text}
    </a>
  )
}

export default ExternalLink
