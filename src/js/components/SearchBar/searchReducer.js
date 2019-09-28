import moment from 'moment';

const initialState = { 
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
        case 'GET_WEATHER' : {
            return {
                ...state,
                city: payload.name,
                lat: payload.coord.lat,
                lon: payload.coord.lon,
                temp: payload.main.temp.toFixed(0),
                pressure: payload.main.pressure,
                humidity: payload.main.humidity,
                lowTemp: payload.main.temp_min.toFixed(0),
                highTemp: payload.main.temp_max.toFixed(0),
                windSpeed: payload.wind.speed,
                error: false,
                history: [
                    ...state.history,
                    { city: payload.name, 
                        date: moment().format('l'),
                        time: moment().format('h:mm:ss a')
                    }
                ]
            }
        }

        case 'GET_WEATHER_FAIL': {
            return {
              ...state,
              error: true
            }
        }

        case 'CITY_NAME': {
            return{
              ...state, 
              name: payload.name
            }
        }  

        default: {
            return state;
        }
    }
}