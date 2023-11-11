import { useState } from 'react'
import axios from 'axios' 

function Clima() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`

    const searchLocation = (event) => {
    if (event.key === 'Enter') {
        axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        })
        setLocation('')
    }
    }
    return (
        <div className='CardClima'>
            <h4>Consulta el clima actual y preparate para salir a correr!</h4>
    <div className="app">
        <div className="search">
            <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Ciudad'
            type="text" />
        </div>
            <div className="container">
            <div className="top">
            <div className="location">
            <p>{data.name}</p>
            </div>
            <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
        </div>
        </div>
    </div>
</div>
    );
}

export default Clima;