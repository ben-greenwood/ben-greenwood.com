const ExternalLink = ({ url, text }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="wavy underline underline-offset-4"
    >
      {text}
    </a>
  )
}

export default ExternalLink
