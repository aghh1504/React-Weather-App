import React, {Component} from 'react'

 const WeatherResults = ({temp, location}) => {
      return (
        <div>
          <h3>Its a {temp} in {location}</h3>
      </div>
    )
}
export default WeatherResults
