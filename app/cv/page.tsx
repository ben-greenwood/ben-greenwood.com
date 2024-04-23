import ExternalLink from "../_components/ExternalLink"
import Header from "@/app/_components/Header"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Ben Greenwood - CV",
  description: "My CV",
}

const CV = async () => {
  return (
    <>
      <Header title="Ben Greenwood - CV" />
      <div className="mt-8">
        <div className="max-w-none space-y-12 font-normal text-slate-600 dark:text-slate-200">
          <Section>
            <p>
              <em className="font-magnat">Product Engineer</em> with over 6
              years of experience blending design and programming. Deeply
              passionate about product growth, I leverage my skills in Product
              Design, Ruby, Typescript, and React to drive significant impact in
              innovative environments.
            </p>
          </Section>
          <Section>
            <SectionTitle title="Skills" />
            <SectionContent as="dl">
              <KeyValue
                label="Languages"
                value="Ruby, TypeScript/JavaScript, Elixir, SQL"
              />
              <KeyValue
                label="Technologies"
                value="Ruby on Rails, React, React Native, Vue.js, Next.js, GraphQL, Phoenix, Postgres, Redis, Tailwind, Git, Heroku, Render"
              />
              <KeyValue
                label="Other"
                value="Product Management, API Design, UI Design, Testing (Unit, Integration, and E2E), Relational Databases, CI/CD Orchestration, Mentoring, Product Design Sprints, A/B Testing"
              />
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle title="Work Experience" />
            <SectionContent>
              <div>
                <div className="flex items-center justify-between">
                  <SectionSubTitle>Career Break</SectionSubTitle>
                  <DateRange start="Jul 2023" end="Current" />
                </div>
                <p className="mt-4">
                  Following the strategic closure of Aklimate, I spent six
                  months travelling across the Asia-Pacific region, complemented
                  by freelance work. This experience expanded my cultural
                  perspective and provided an opportunity to deepen my existing
                  technical knowledge.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <SectionSubTitle>
                    Senior Product Engineer -{" "}
                    <ExternalLink
                      url="https://www.getaklimate.com"
                      text="Aklimate (YC W22)"
                    />
                  </SectionSubTitle>

                  <DateRange start="Jul 2022" end="Jul 2023" />
                </div>
                <div className="mt-4">
                  <ul className="ml-4 list-disc space-y-2">
                    <li>
                      Led the design and implementation of complex carbon & home
                      retrofit algorithms, resulting in 100&apos;s of hours of
                      manual work saved.
                    </li>
                    <li>
                      Built and maintained an internal REST API, delivering data
                      on the UK&apos;s housing and Energy Performance
                      Certificate (EPC) metrics.
                    </li>
                    <li>
                      Strategically redesigned a critical lead generation flow,
                      successfully increasing lead conversion by 3x, as
                      evidenced by user acquisition rates.
                    </li>
                    <li>
                      Guided and re-trained junior engineers on the
                      company&apos;s development and product stack.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <SectionSubTitle>
                    Senior Product Engineer -{" "}
                    <ExternalLink
                      url="https://appearhere.co.uk"
                      text="Appear Here"
                    />
                  </SectionSubTitle>

                  <DateRange start="Oct 2021" end="Jul 2022" />
                </div>
                <div className="mt-4">
                  <ul className="ml-4 list-disc space-y-2">
                    <li>
                      Drove a new subscription model&apos;s development and
                      integration with third-party payment apps (ChargeBee,
                      Stripe, Go Cardless), yielding over £10,000pm in automatic
                      payments in the first month.
                    </li>
                    <li>
                      Implemented a bespoke property suggestions algorithm
                      leveraging geolocation and price preferences, leading to a
                      20% increase in the booking conversion rate.
                    </li>
                    <li>
                      Enhanced automated testing processes and optimised
                      deployment pipelines, elevating the CI deployment success
                      rate from approximately 60% to over 85%.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <SectionSubTitle>
                    Software Engineer -{" "}
                    <ExternalLink url="https://mmtm.io" text="MMTM" />
                  </SectionSubTitle>

                  <DateRange start="Feb 2018" end="Oct 2021" />
                </div>
                <div className="mt-4">
                  <ul className="ml-4 list-disc space-y-2">
                    <li>
                      Led client workshops leveraging the Google-based PDS
                      approach, resolving critical business issues through
                      design, prototyping, and customer testing, leading to 50%
                      reduction in scope creep.
                    </li>
                    <li>
                      Created an offline-first mobile app featuring a queuing
                      system for seamless data syncing post reconnection,
                      improving user experience during network instability.
                    </li>
                    <li>
                      Reduced a client&apos;s operational costs by 50% by
                      developing an online learning platform that effectively
                      delivers multimedia and text-based content for training
                      the UK&apos;s Telecommunications Industry.
                    </li>
                  </ul>
                </div>
              </div>
            </SectionContent>
          </Section>
          <Section>
            <SectionTitle title="Projects" />
            <SectionContent>
              <div>
                <div className="flex items-center justify-between">
                  <SectionSubTitle>Split</SectionSubTitle>
                  <DateRange start="Jan 2022" end="Jul 2023" />
                </div>
                <div className="mt-4">
                  <ul className="ml-4 list-disc space-y-2">
                    <li>
                      Designed and implemented an OCR-based application to
                      digitise and parse receipt data.
                    </li>
                    <li>
                      Engineered a system for transforming digitised data into
                      selectable line items.
                    </li>
                    <li>
                      Managed the storage and retrieval of unique codes,
                      ensuring secure, shared access to the bill data.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <SectionSubTitle>Code Stash</SectionSubTitle>
                  <DateRange start="Jan 2022" end="Current" />
                </div>
                <div className="mt-4">
                  <ul className="ml-4 list-disc space-y-2">
                    <li>
                      An open-source tool designed to streamline the process of
                      managing code snippets. This product leverages the user-
                      friendly interface of Raycast to simplify the storage and
                      retrieval of code pieces, effectively eliminating the need
                      for time-consuming git searches.
                    </li>
                  </ul>
                </div>
              </div>
            </SectionContent>
          </Section>
        </div>
      </div>
    </>
  )
}

const DateRange = ({ start, end }: { start: string; end: string }) => {
  return (
    <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">
      {start} - {end}
    </p>
  )
}

const Section = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-8">{children}</div>
}

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center">
      <span className="flex-1 whitespace-nowrap text-lg font-medium text-slate-500 dark:text-slate-300">
        {title}
      </span>
      <hr className="ml-4 w-full border-indigo-600" />
    </div>
  )
}

const SectionContent = ({
  children,
  as = "div",
}: {
  children: React.ReactNode
  as?: React.ElementType
}) => {
  const Component = as
  return <Component className="space-y-10">{children}</Component>
}

const SectionSubTitle = ({ children }: { children: React.ReactNode }) => {
  return <h5 className="font-semibold">{children}</h5>
}

const KeyValue = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="grid w-full grid-cols-12 font-medium text-slate-500 dark:text-slate-300">
      <dt className="col-span-4 ">{label}</dt>
      <dd className="col-span-8 flex">
        <p>{value}</p>
      </dd>
    </div>
  )
}

export default CV
