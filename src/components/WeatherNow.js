import React from 'react'

function WeatherNow({ data }) {

    return (
        <div className="weathernow-container">
            <div style={{ fontSize: 30, position: 'absolute', top: 50 }}>React Weather</div>
            {data &&
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }} className="weather-info">
                    <p style={{ fontSize: 70, marginRight: 20 }}>{Math.round(data && data.main.temp)}°C</p>
                    <div style={{ marginRight: 20 }} className="weathernow-local">
                        <p style={{ fontSize: 30 }}>{data && data.name}</p>
                        <p style={{ fontSize: 16 }}>{new Date().getHours()}:{new Date().getMinutes()} - {new Date(data.dt * 1000).toLocaleDateString("pt-BR")}</p>
                    </div>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon" />
                </div>
            }
        </div>
    )
}

export default WeatherNow
