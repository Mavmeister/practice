import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import { Info, Search, Week } from './components'
import { WeatherApi } from './Api'
// import { Forecast } from './lib/util'


class App extends Component {
  state = {
    query: ''
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    WeatherApi(this.state.query)
      .then(data => {
        this.setState({
          dailyWeather: data.list.slice(1, data.list.length - 1),
          today: data.list.slice(0, 1)
        })
        console.log(this.state.dailyWeather)
      })
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please enter a valid US city'
    })
  }

  handleInputChange = (evt) => {
    this.setState({
      query: evt.target.value
    })
  }

  render() {
    const submitHandler = this.state.query ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="container">
          <div className="widget">
            {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
            <Search handleInputChange={this.handleInputChange}
              query={this.state.query}
              handleSubmit={submitHandler}/>

            {this.state.dailyWeather && 
              <div>
                <Info weather={this.state.today} />
                <Week weather={this.state.dailyWeather} />
              </div>}
            </div>
        </div>
      </div>
    );
  }
}

export default App;