import { RoughNotation } from "react-rough-notation"

const ExternalLink = ({ url, text }) => {
  const roughNotationUnderlineProps = {
    iterations: 1,
    type: "underline",
    color: "#f97516",
    show: true,
    animate: false,
    multiline: true,
  }

  return (
    <RoughNotation {...roughNotationUnderlineProps}>
      <a href={url} target="_blank" rel="noreferrer">
        {text}
      </a>
    </RoughNotation>
  )
}

export default ExternalLink
