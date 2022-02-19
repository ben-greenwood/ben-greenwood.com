const Tooltip = ({ children, text, direction = "top" }) => (
  <div className="group relative flex items-center justify-center">
    {children}
    <div
      className={`${
        direction === "bottom" ? "-bottom-10" : "-top-10"
      } handwriting arrow absolute rotate-6 scale-0 rounded-full border border-gray-200 bg-white py-1 px-3 text-sm text-black opacity-0  transition-all duration-500 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100`}
    >
      {text}
    </div>
  </div>
)

export default Tooltip
