import moment from 'moment';

const initialState = { 
  cityData: '',
  searchCity: '',
  city: '',
  lat: null,
  lon: null,
  temp: 0,
  pressure: 0,
  humidity: 0,
  lowTemp: 0,
  highTemp: 0,
  windSpeed: 0,
  history: [],
  error: false
}

export default function searchReducer(state = initialState,  action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_WEATHER_FULFILLED' : {
            return {
                ...state,
                cityData: payload.data,
                city: payload.data.name,
                lat: payload.data.coord.lat,
                lon: payload.data.coord.lon,
                temp: payload.data.main.temp.toFixed(0),
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                lowTemp: payload.data.main.temp_min.toFixed(0),
                highTemp: payload.data.main.temp_max.toFixed(0),
                windSpeed: payload.data.wind.speed,
                error: false,
                history: [
                    ...state.history,
                    { city: payload.data.name, 
                        date: moment().format('l'),
                        time: moment().format('h:mm:ss a')
                    }
                ]
            }
        }

        // case 'GET_WEATHER_FAIL': {
        //     return {
        //       ...state,
        //       error: true
        //     }
        // }

        case 'CITY_NAME': {
            return{
              ...state, 
              cityData: payload.data,
              city: payload.city
            }
        }  

        default: {
            return state;
        }
    }
}