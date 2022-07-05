import { useKBar } from "kbar"

const CommandBarToggle = () => {
  const { query } = useKBar()

  return (
    <button
      onClick={query.toggle}
      className="rounded-lg border border-gray-200 dark:border-gray-800 p-2 text-base text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
    >
      <span ref={cmdRef}>⌘</span>
      <span ref={kRef}>K</span>
    </button>
  )
}

export default CommandBarToggle
