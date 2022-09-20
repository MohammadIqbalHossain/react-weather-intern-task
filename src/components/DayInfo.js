import React from 'react'
import { formatToLocalTime } from '../Service/WeatherData'

export default function DayInfo({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h2 className="text-center font-light text-white">
          {formatToLocalTime(dt, timezone)}
        </h2>
      </div>

      <div className="flex items-center justify-center py-6 text-xl text-cyan-300 capitalize">
        <p>{`${name}, ${country}`}</p>
      </div>
    </div>
  )
}
