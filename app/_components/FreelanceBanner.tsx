export default function FreelanceBanner() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
      <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-slate-900 px-6 py-2.5 dark:bg-white sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
        <p className="text-sm leading-6 text-white dark:text-slate-800">
          <a href="mailto:ben.t.greenwood@gmail.com">
            <strong className="font-semibold">Available for Work</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Drop me a line to discuss opportunities&nbsp;
            <span aria-hidden="true" className="ml-1">
              &rarr;
            </span>
          </a>
        </p>
      </div>
    </div>
  )
}
