import React from "react"
import ExternalLink from "components/v1/ExternalLink"
import { FireIcon, BookOpenIcon } from "@heroicons/react/outline"
import Book from "components/v1/Book"

const Bio = ({ books }) => (
  <div className="prose prose-orange dark:prose-invert dark:prose-orange max-w-none space-y-8 sm:space-y-10">
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
    <div className="grid-cols-2 sm:grid">
      <div className="hidden sm:block">
        <h5 className="mb-3 flex items-center font-medium">
          <FireIcon className="mr-2 h-5 w-5 stroke-current" />
          Passionate about...
        </h5>
        <ul className="space-y-1 text-sm">
          <li className="my-0 mt-2">Food</li>
          <li>Coffee</li>
          <li>Music</li>
          <li>Coding</li>
        </ul>
      </div>
      <div className="mt-4 sm:mt-0">
        <h5 className="mb-3 flex items-center font-medium">
          <BookOpenIcon className="mr-2 h-5 w-5 stroke-current" />
          Currently reading...
        </h5>
        <ul className="space-y-1 text-sm">
          {books &&
            books.map((book, index) => (
              <li key={index}>
                <Book book={book} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  </div>
)

export default Bio
