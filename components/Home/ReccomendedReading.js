import Article from "../Article"
import { RoughNotation } from "react-rough-notation"
import useWindowSize from "../../utils/hooks/UseWindowSize"

const ReccomendedReading = () => {
  const size = useWindowSize()

  const articles = [
    {
      reccomended: true,
      img: "https://moxie.org/blog/images/nft-opensea.png",
      title: "My first impressions of web3",
      url: "https://moxie.org/2022/01/07/web3-first-impressions.html",
    },
    {
      reccomended: false,
      img: "https://images.unsplash.com/photo-1593697972361-20049710acb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2966&q=80",
      title: "The Decision-Making Pendulum",
      url: "https://candost.blog/the-decision-making-pendulum",
    },
    {
      reccomended: false,
      img: "https://imagedelivery.net/cCutpQSrpIaP0yEOiL1OGw/2daf6335-357d-44a5-d9c2-0b8b0e4cbf00/fullsize",
      title: "How my website works",
      url: "https://brianlovin.com/writing/how-my-website-works",
    },
  ]

  return (
    <div className="relative">
      <h5 className="mb-4 flex items-center font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-5 w-5 fill-current text-gray-800"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
        Interesting reads...
      </h5>
      <div className="handwriting absolute -top-16 right-4 rotate-3 transform sm:right-8 md:-top-20 lg:right-0">
        <RoughNotation
          type="circle"
          color="#000"
          show
          padding={size.width <= 768 ? [10, 20] : [20, 30]}
          strokeWidth={2}
        >
          <span className="handwriting text-lg md:text-xl">Reccomended</span>
        </RoughNotation>
        <svg
          className="mt-6 rotate-180 transform"
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="50"
        >
          <g
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          >
            <path d="M2.012 47.458c2.254-15.748 7.447-21.81 23.566-21.434 22.829.533 36.483-4.221 53.935-19.566" />
            <path d="M80.435 14.297c-.592-4.348 2.294-7.566 2.554-11.755-2.997 1.132-9.175 3.154-12.46 2.399" />
          </g>
        </svg>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-1">
        {articles &&
          articles.map(({ img, url, title, reccomended }) => (
            <Article
              key={title}
              img={img}
              title={title}
              url={url}
              className={reccomended ? "order-1 sm:order-2" : "order-2"}
            />
          ))}
      </div>
    </div>
  )
}

export default ReccomendedReading