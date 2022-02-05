const classNames = require("classnames")

const Article = ({ img, title, url, className }) => {
  new URL(url)
  const urlHost = new URL(url).hostname

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={classNames(
        { className },
        "group grid grid-cols-5 overflow-hidden rounded-md border border-gray-100 bg-white p-2 transition-transform duration-200 ease-in-out hover:scale-105"
      )}
    >
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full">
        <img
          src={img}
          alt={title}
          className="h-14 w-full overflow-hidden rounded-md object-cover object-center"
        />
      </div>
      <div className="col-span-4 ml-2 p-2">
        <h3 className="truncate text-sm font-medium text-gray-700">{title}</h3>
        <span className="mt-1 flex items-center text-xs text-gray-400">
          {urlHost}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-3 w-3 fill-current text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </span>
      </div>
    </a>
  )
}

export default Article
