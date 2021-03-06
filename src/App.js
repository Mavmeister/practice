import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import { Info, Search, Week } from './components'
import { WeatherApi } from './Api'


class App extends Component {
  state = {
    query: '',
    error: false
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    WeatherApi(this.state.query)
      .then(data => {
        if (data){
          this.setState({
            dailyWeather: data.list.slice(1, data.list.length - 1),
            today: data.list.slice(0, 1)
          })
        } else {
          this.setState({
            error: true,
            errorMessage:  'Please enter a valid US city'
          })
        }
        console.log(data)
        console.log(this.state.dailyWeather)
      })
  }

  handleClearInput = () => {
    this.setState({
      query: '',
      errorMessage: ''
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
      query: evt.target.value,
      errorMessage: ''
    })
  }

  render() {
    const submitHandler = this.state.query ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="container">
            {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <div className="widget">
            <Search handleInputChange={this.handleInputChange}
              clear={this.handleClearInput}
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