import ExternalLink from "../ExternalLink"
import { FireIcon, LightBulbIcon } from "@heroicons/react/solid"

const Bio = () => (
  <div className="prose prose-orange dark:prose-invert dark:prose-orange max-w-none space-y-10">
    <p>
      <span className="mr-1 text-lg">👋</span> I&apos;m a Product Engineer based
      in Bath UK, currently working at{" "}
      <ExternalLink url="https://appearhere.co.uk" text="Appear [ here ]" />,
      where I&apos;m helping make flexible retail more accessible.
    </p>
    <p>
      Previously, I worked at <ExternalLink url="https://mmtm.io" text="mmtm" />{" "}
      - a small digital agency based out of Cheltenham - where I spent most of
      my time designing, prototyping and building web/mobile apps for companies
      spanning multiple industries from Telecoms to VR.
    </p>
    <p>
      I enjoy writing code, but my passion is in building useful products. I
      love sweating the details of a design and making each interaction as
      smooth and effortless as possible.
    </p>
    <div className="hidden grid-cols-2 sm:grid">
      <div>
        <h5 className="flex items-center font-medium">
          <FireIcon className="mr-2 h-5 w-5" />
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
          <LightBulbIcon className="mr-2 h-5 w-5" />
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
