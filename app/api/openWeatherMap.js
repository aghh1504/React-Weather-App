import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=437373aed2dace2032291928257abf5e';

module.exports = {
  getTemp: function(location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

// return fetch(requestUrl).then(res => {
//   res.json().then(body => {
//    body.main.temp
//   })
// })

  return axios.get(requestUrl).then(function(res) {
    if(res.data.cod && res.data.message) {
      throw new Error(res.data.message)
    }else {
      return res.data.main.temp
    }
  },
  function(res) {
    throw new Error(res.data.message)
  })
  }
}
