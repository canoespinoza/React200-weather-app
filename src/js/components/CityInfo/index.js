import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
    return{
        cityData: store.search.cityData,
        city: store.search.city,
        lat: store.search.lat,
        lon: store.search.lon,
        temp:store.search.temp,
        pressure:store.search.pressure,
        humidity: store.search.humidity,
        lowTemp: store.search.lowTemp,
        highTemp: store.search.highTemp,
        windSpeed: store.search.windSpeed
    };
}

export default connect(mapStoreToProps)(CityInfo);