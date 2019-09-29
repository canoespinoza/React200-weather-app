const axios = require('axios');

export function getWeather(city) {
  return {
    type: 'GET_WEATHER',
    payload: axios.get(`/search/${city}`)
  };
}

export function searchCity(city) {
  return {
      type:'CITY_NAME',
      payload: { city }
  };
}
