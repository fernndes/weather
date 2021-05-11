import React from 'react'

import { WeatherCard as WeatherCardComponent } from '../styles/global'

function WeatherCard({ data }) {
    return (
        <WeatherCardComponent className="card-weather">
            <div>{data[0].fullData.weather[0].main}</div>
            <div>Max: {data[0].fullData.temp.max} °C</div>
            <div>Min: {data[0].fullData.temp.min} °C</div>
            <div>Humidity: {data[0].fullData.humidity}%</div>
            <div>Wind Speed: {Math.round(data[0].fullData.wind_speed * 1.60934)} Km/h</div>
        </WeatherCardComponent>
    )
}

export default WeatherCard
