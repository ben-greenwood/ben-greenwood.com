import { useKBar } from "kbar"

const CommandBarToggle = () => {
  const { query } = useKBar()

  return (
    <button
      onClick={query.toggle}
      className="fixed top-5 right-5 z-10 rounded-lg border border-gray-800 p-2 text-base text-white hover:bg-gray-900"
    >
      ⌘K
    </button>
  )
}

export default CommandBarToggle
