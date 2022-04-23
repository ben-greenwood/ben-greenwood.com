import { CloudIcon } from "@heroicons/react/solid"
import Marquee from "./Marquee"

const GradientTile = ({ weather }) => {
  return (
    <div className="relative flex h-full w-full flex-col justify-between bg-yellow-100">
      <div className="bg-orange-100 p-2">
        <Marquee size="sm" text={`${weather.current.temp_c}°`} fill />
      </div>
      <Marquee size="xl" text={weather.current.condition.text} />

      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        <div className="absolute rounded-full bg-yellow-200 bg-opacity-50 p-2">
          <img
            src="https://bmcdn.nl/assets/weather-icons/v2.1/fill/clear-day.svg"
            className="h-24 w-24"
          />
        </div>
      </div>
    </div>
  )
}

export default GradientTile
