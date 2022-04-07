import React, { useState } from 'react'
import axios from 'axios'



const App =() => {

  const [data, setData] = useState({})
const [location, setLocation] = useState('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5c186b290baa953c384eb865afcc05fb`

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
    <div className="app">
      <div className="search">
        <input type="text" value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter A City..." />
      </div>
      <div className="container">
      <h2>{data.name}</h2>
        <div className="stats">
        {data.main ?<p id='first'>Today</p>: <p id='first'>Enter A City Name</p> }
          
          {data.main ? <p>Temperature: {data.main.temp}°F</p>: null}
          {data.main ? <p>{data.weather[0].main}</p>: null}
        </div>
      </div>
      {data.name !== undefined &&
      <div className="data-stats">
        <div className="box">
          <h5>Feels like</h5>
          <p>{data.main.feels_like}°F</p>
        </div>
        <div className="box">
          <h5>Humidity</h5>
          <p>{data.main.humidity}</p>
        </div>
        <div className="box">
          <h5>Visibility</h5>
          <p>{data.visibility}</p>
        </div>
        <div className="box">
          <h5>Wind speed</h5>
          <p>{data.wind.speed} km/hr</p>
        </div>
      </div>
}
    </div>
  );
}

export default App;
