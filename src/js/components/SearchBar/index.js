import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    return{
        cityData: store.search.cityData,
        city: store.search.city,
    };
}

export default connect(mapStoreToProps)(SearchBar);
