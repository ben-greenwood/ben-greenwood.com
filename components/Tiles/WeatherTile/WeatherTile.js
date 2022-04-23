import { useState, useEffect } from "react"
import Tile from "../Tile"
import RefreshButton from "../RefreshButton"
import Sunny from "./Sunny"

const GradientTile = ({ order }) => {
  const [weather, setWeather] = useState({
    location: {
      name: "London",
      region: "City of London, Greater London",
      country: "United Kingdom",
      lat: 51.52,
      lon: -0.11,
      tz_id: "Europe/London",
      localtime_epoch: 1650726582,
      localtime: "2022-04-23 16:09",
    },
    current: {
      last_updated_epoch: 1650722400,
      last_updated: "2022-04-23 15:00",
      temp_c: 17,
      temp_f: 62.6,
      is_day: 1,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003,
      },
      wind_mph: 13.6,
      wind_kph: 22,
      wind_degree: 60,
      wind_dir: "ENE",
      pressure_mb: 1002,
      pressure_in: 29.59,
      precip_mm: 0,
      precip_in: 0,
      humidity: 52,
      cloud: 75,
      feelslike_c: 17,
      feelslike_f: 62.6,
      vis_km: 10,
      vis_miles: 6,
      uv: 5,
      gust_mph: 17.4,
      gust_kph: 28.1,
    },
  })

  useEffect(async () => {
    getWeather()
  }, [])

  const getWeather = async () => {
    // const response = await fetch(
    //   "https://api.weatherapi.com/v1/current.json?key=51ee5890da614cbca68150346222304&q=London&aqi=no"
    // )
    // const data = await response.json()
    // console.log(data)
    setWeather(weather)
  }

  const displayChildren = (
    <div className="h-full w-full">
      <Sunny weather={weather} />
    </div>
  )

  const controlChildren = (
    <div className="flex items-center justify-between">
      <h4>Obligatory gradient tile</h4>
      <RefreshButton handleClick={() => getWeather()} />
    </div>
  )

  return (
    <Tile
      displayChildren={displayChildren}
      controlChildren={controlChildren}
      order={order}
    />
  )
}

export default GradientTile
