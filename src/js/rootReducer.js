import { combineReducers } from 'redux';
import searchReducer from './components/SearchBar/searchReducer.js';

const rootReducer = combineReducers({
 search: searchReducer
});

export default rootReducer;
