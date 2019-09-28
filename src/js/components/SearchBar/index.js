import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    return{
       name: store.search.city
    };
}

export default connect(undefined, mapStoreToProps)(SearchBar);
