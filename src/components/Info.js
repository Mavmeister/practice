import React from 'react'

export const Info = (props) => {
    console.log("INFO", props)
    const today = props.weather[0]
    const temp = Math.round(today.temp.day)
  return (
    <div className="info-main">
        <div className="temp"> {temp} <i className="deg"> &#176; </i> </div>
        <div className="data">
            <span className="unit"> F </span>
            <span className="description"> {today.weather[0].description} </span>
            <span className="humidity"> {today.humidity}% Humidity </span>
        </div>
    </div>
  )
}