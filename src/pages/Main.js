import React, { useState } from 'react'

import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import { DefaultContainer } from '../styles/global'
import { getWeather, getCoord, weatherNow } from '../services/api'
import WeatherNow from '../components/WeatherNow'

function Main() {
    const [city, setCity] = useState('')
    const [data, setData] = useState(null)
    const [now, setNow] = useState(null)
    const [error, setError] = useState('')

    async function get() {
        if (city.length === 0) return alert('Field must not be empty')
        try {
            let coord = await getCoord(city)
            let weather = await getWeather(coord.lat, coord.lon)
            let setWeatherNow = await weatherNow(coord.lat, coord.lon)
            setNow(setWeatherNow)
            setData(weather)
            setError('')
        } catch (err) {
            setError(err.response.data.message)
        }
    }

    return (
        <DefaultContainer>
            <WeatherNow data={now} />
            <div style={{ display: 'flex', flexDirection: 'column', width: 350 }}>
                <SearchBar city={city} set={setCity} get={get} error={error} />
                {data && <WeatherCard data={data} />}
            </div>
        </DefaultContainer>
    )
}

export default Main
