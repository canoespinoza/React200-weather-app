import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
    return{
        city: store.search.name,
        lat: store.search.lat,
        lon: store.search.lon,
        temp:store.search.temp,
        pressure:store.search.pressure,
        humidity: store.search.humidity,
        lowtemp: store.search.lowTemp,
        hightemp: store.search.highTemp,
        windSpeed: store.search.wind,
        icon: store.search.icon,
    };
}

export default connect(mapStoreToProps)(CityInfo);