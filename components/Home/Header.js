import Nav from "../Nav/Nav"

const Header = ({ title, subTitle, children }) => (
  <div className="border-b border-slate-100 py-6 dark:border-slate-700 lg:pt-10 lg:pb-6">
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <h1 className="font-heading text-2xl font-black text-slate-800 dark:text-slate-200 md:text-4xl">
          {title}
        </h1>
        <h2 className="text-base font-semibold text-slate-700 dark:text-slate-300 md:text-lg">
          {subTitle}
        </h2>
      </div>
      <div className="col-span-1 hidden place-content-center content-center lg:flex">
        {/* <Nav /> */}
      </div>
      <div className="col-span-1 mt-3 flex items-center sm:mt-0 sm:justify-end">
        {children}
      </div>
    </div>
  </div>
)

export default Header
