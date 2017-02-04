import React, {Component} from 'react'
import WeatherForm from 'WeatherForm'
import WeatherResults from 'WeatherResults'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=437373aed2dace2032291928257abf5e';

export default class Weather extends Component {
  constructor() {
     super();
      this.state = {
        isLoading: false
      }
  }

handleSearch = (location) => {
  const encodedLocation = encodeURIComponent(location);
  const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  this.setState({isLoading: true})
    fetch(requestUrl).then(res => {
      res.json().then(body => {
        this.setState({location: location, temp:body.main.temp, isLoading: false})
      })
    })
}

  render() {
    var {isLoading, temp, location} = this.state
    function renderMessages(){
      if(isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherResults  location={location} temp={temp}/>
      }
    }
    return (
      <div>
        <h2>Weather Component</h2>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessages()}
      </div>
    )
  }
}
