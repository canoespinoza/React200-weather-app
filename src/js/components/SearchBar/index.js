import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    return{
        cityData: store.search.cityData,
        searchCity: store.search.city,
        city: store.search.city,
        lat: store.search.lat,
        lon: store.search.lon,
        temp:store.search.temp,
        pressure:store.search.pressure,
        humidity: store.search.humidity,
        lowTemp: store.search.lowTemp,
        highTemp: store.search.highTemp,
        windSpeed: store.search.windSpeed,
        searchBar: store.search.searchBar
    };
}

export default connect(mapStoreToProps)(SearchBar);
