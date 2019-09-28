const axios = require('axios');

export function getWeather(name) {
  return {
    type: 'GET_WEATHER',
    payload: axios.get(`/search/${city}`)
  };
}

export function searchCity(name) {
  return {
      type:'CITY_NAME',
      payload: { name }
  };
}

// export const getWeather = city => {
//   return dispatch => {
//     axios.get(`/search/${city}`)
//       .then(response => dispatch({ type: 'GET_WEATHER', payload: response.data }))
//       .catch(err => dispatch({ type: 'GET_WEATHER_FAIL', error: true }))
//   }
// }