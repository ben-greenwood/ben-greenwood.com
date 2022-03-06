const Book = ({ book: { title, link, creator } }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex flex-col no-underline"
  >
    <h3 className="mt-0 truncate text-sm font-normal text-gray-700 underline group-hover:text-gray-500">
      {title}
    </h3>
    <span className="-mt-1 flex items-center text-xs font-normal text-gray-400">
      {creator}
    </span>
  </a>
)

export default Book
