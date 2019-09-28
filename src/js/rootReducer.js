import { combineReducers } from 'redux';
import searchReducer from './components/SearchBar/searchReducer.js';

const rootReducer = combineReducers({
 data: searchReducer
});

export default rootReducer;
