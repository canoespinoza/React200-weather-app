import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import CityInfo from './components/CityInfo/CityInfo';
import SearchHistory from './components/SearchHistory/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron text-center">Weather App</div>
        <SearchBar/>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInfo/> 
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory/> 
          </div>
        </div>
      </div>
    );
  } 
}
