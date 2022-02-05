import ExternalLink from "../ExternalLink"

const Bio = () => (
  <div className="prose prose-orange max-w-none space-y-10 prose-a:no-underline dark:prose-invert dark:prose-orange">
    <p>
      I&apos;m a Product Engineer based in Bath UK, currently working at{" "}
      <ExternalLink url="https://appearhere.co.uk" text="Appear [ here ]" />,
      where I&apos;m helping make flexible retail more accessible.
    </p>
    <p>
      Previously I worked at <ExternalLink url="https://mmtm.io" text="mmtm" />,
      where I helped build web/mobile apps for companies spanning multiple
      industries from Telecoms to VR. I also had the opportunity to lead the
      design and run Product Design Sprints for several projects during my time
      there.
    </p>

    <p>
      I enjoy writing code, but my passion is in building useful products. I
      love sweating the details of a design and making each interaction as
      smooth and effortless as can be.
    </p>
    <div className="grid grid-cols-2">
      <div>
        <h5 className="flex items-center font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
              clipRule="evenodd"
            />
          </svg>
          Passionate about...
        </h5>
        <ul className="space-y-1">
          <li className="my-0 mt-2">Food</li>
          <li>Coffee</li>
          <li>Music</li>
          <li>Coding</li>
        </ul>
      </div>
      <div>
        <h5 className="flex items-center font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
          </svg>
          Curious about...
        </h5>
        <ul className="space-y-1">
          <li className="my-0 mt-2">Crypto</li>
          <li>NFTs</li>
          <li>Web 3.0</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Bio
