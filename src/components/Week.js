import React from 'react'
import {Day} from './Day'
import PropTypes from 'prop-types'

export const Week = (props) => {
  return (
    <div className="week">
        {props.weather.map(day => <Day {...day} />)}
    </div>
  )
}

Week.propTypes = {
  weather: PropTypes.array.isRequired
}