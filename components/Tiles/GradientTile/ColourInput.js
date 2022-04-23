const ColourInput = ({ index, setColour, colour }) => (
  <div className="flex items-center space-x-2">
    <div className="h-full w-16 rounded-md bg-red-600"></div>
    <div>
      <label htmlFor="colour" className="sr-only">
        Colour One
      </label>
      <input
        type="number"
        name="colour"
        id="colour"
        // value={colour}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="255,0,0"
        // onChange={(e) => setColour(e.target.value)}
      />
    </div>
  </div>
)

export default ColourInput
