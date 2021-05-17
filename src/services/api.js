import axios from 'axios'

export async function getWeather(lat, lon) {
    let request = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${process.env.REACT_APP_APP_ID}`)
    let data = [];
    request.data.daily.forEach((day) => {
        return data.push({ date: new Date(day.dt * 1000).toLocaleDateString("pt-BR"), max: day.temp.max, min: day.temp.min, fullData: day })
    })
    return data
}

export async function getCoord(name) {
    let request = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_APP_ID}`)
    return request.data.coord
}

export async function geIcon(code) {
    let request = await axios.get(`http://openweathermap.org/img/wn/${code}@2x.png`)
    return request
}
