import React, { useState } from 'react'

import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import WeatherChart from '../components/Graph'
import { DefaultContainer } from '../styles/global'
import { getWeather, getCoord } from '../services/api'

function Main() {
    const [city, setCity] = useState('')
    const [data, setData] = useState(null)
    const [error, setError] = useState('')

    async function get() {
        if (city.length === 0) return alert('Field must not be empty')
        try {
            let coord = await getCoord(city)
            let weather = await getWeather(coord.lat, coord.lon)
            setData(weather)
            setError('')
        } catch (err) {
            setError(err.response.data.message)
        }
    }

    return (
        <DefaultContainer>
            <SearchBar city={city} set={setCity} get={get} error={error} />
            {data && <WeatherCard data={data} />}
            {data && <WeatherChart data={data} />}
        </DefaultContainer>
    )
}

export default Main
