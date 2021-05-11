import React, { useState } from 'react'

import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import WeatherChart from '../components/Graph'
import { DefaultContainer } from '../styles/global'
import { getWeather, getCoord } from '../services/api'

function Main() {
    const [city, setCity] = useState('São Paulo')
    const [data, setData] = useState(null)
    
    async function get() {
        let coord = await getCoord(city)
        let weather = await getWeather(coord.lat, coord.lon)
        setData(weather)
    }

    return (
        <DefaultContainer>
            <SearchBar city={city} set={setCity} get={get} />
            {data && <WeatherCard data={data}/>}
            {data && <WeatherChart data={data}/>}
        </DefaultContainer>
    )
}

export default Main
