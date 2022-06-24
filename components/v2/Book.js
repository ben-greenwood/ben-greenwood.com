import React from "react"

const Book = ({ book: { title, link, creator } }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex max-w-full flex-col no-underline"
  >
    <h3 className="mt-0 truncate text-sm font-normal text-slate-700 underline group-hover:text-slate-500">
      {title}
    </h3>
    <span className="-mt-1 flex items-center text-xs font-normal text-slate-400">
      {creator}
    </span>
  </a>
)

export default Book
