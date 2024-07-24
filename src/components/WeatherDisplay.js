import React from 'react'

function WeatherDisplay({temperature,conditions}) {
    //console.log(conditions)

    const tempStyle={color:temperature>20 ? "red":"blue"}
  return (
    <div>
        <p>
            Temperatur : {" "}
            <span style={tempStyle}>
                {temperature}°C
            </span>
        </p>
        <p>Conditons : {conditions}</p>
    </div>
  )
}

export default WeatherDisplay