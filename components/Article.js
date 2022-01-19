import Image from "next/image"


const Article = ({ img, title, url }) => {
  new URL(url);
  const urlHost = new URL(url).hostname
  
  return (
    <a href={url} className="group bg-gray-100 rounded-lg overflow-hidden flex flex-col">
      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
        <img src={img} alt={title} className="w-full h-32 object-center object-cover group-hover:opacity-75" />
      </div>
      <div className="p-4 flex flex-col space-between h-full flex-grow justify-between">
        <h3 className="text-sm font-medium text-gray-600">
          {title}
        </h3>
        <span className="text-xs text-gray-400 flex items-center mt-2">
          {urlHost}
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-3 w-3 fill-current text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default Article;