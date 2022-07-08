import React, { useEffect, useRef } from "react"
import Typed from "typed.js"

const AnimatedType = ({ strings = ["Placeholder"] }) => {
  const el = useRef(null)
  const typed = useRef(null)

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 100,
    }

    typed.current = new Typed(el.current, options)

    return () => typed.current.destroy()
  }, [])

  return (
    <div className="h-8">
      <h2
        className="typed inline text-base font-semibold text-green-600 md:text-base"
        ref={el}
      ></h2>
    </div>
  )
}

export default AnimatedType
