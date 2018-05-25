import React from 'react'
import PropTypes from 'prop-types'

export const Day = (props) => {
  const source = `http://openweathermap.org/img/w/${props.weather[0].icon}.png`
  const icon = <img src={source} alt={props.weather[0].main} />

  const getDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000)
  }
  console.log(props)

  return (
    <div className="single-day">
      <span className="date"> Jan 1 </span>
      <span className="weather-icon"> {icon} </span>
      <span className="max-temp"> {Math.round(props.temp.max)} </span>
      <span className="min-temp"> {Math.round(props.temp.min)} </span>
    </div>
  )
}



