const Tile = ({ displayChildren, controlChildren }) => (
  <div className="col-span-4 rounded-md border border-gray-200 bg-white p-4">
    <div className="h-64 overflow-hidden rounded-md bg-white">
      {displayChildren}
    </div>
    <div className="mt-4">{controlChildren}</div>
  </div>
)

export default Tile
