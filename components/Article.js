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
        {img ? (
          <img
            src={img}
            alt={title}
            className="h-14 w-full overflow-hidden rounded-md object-cover object-center"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-100 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        )}
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
