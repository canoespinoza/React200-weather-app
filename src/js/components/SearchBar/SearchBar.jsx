import React from 'react';

import { getWeather, searchCity } from './searchAction';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
       
        this.handleButton = this.handleButton.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleButton(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(getWeather(value));
    }

    handleSearch(event) {
      const { dispatch } = this.props;
      const { value } = event.target;
      dispatch(searchCity(value))
    }

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch, city } = this.props;
        dispatch(getWeather(city));
    }
    
  render() {
    const {value} = this.props
    return (
        <div className='container'>
          <div className='btn-group' role='group'>
            <button 
              type='button'
              className='btn btn-primary' 
              value='San Diego'
              name='San Diego'
              onClick={this.handleButton}>San Diego
            </button>
            <button 
              type='button'
              className='btn btn-primary' 
              value='New York'
              name='New York'
              onClick={this.handleButton}>New York
            </button>
            <button
              type='button' 
              className='btn btn-primary' 
              value='Washington D.C.'
              name='Washington D.C.'
              onClick={this.handleButton}>Washington D.C.
            </button>
            <button
              type='button' 
              className='btn btn-primary' 
              value='London'
              name='London'
              onClick={this.handleButton}>London
            </button>
            <button 
              type='button'
              className='btn btn-primary' 
              value='Tokyo'
              name='Tokyo'
              onClick={this.handleButton}>Tokyo
            </button>
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter city'
              value={value}
              onChange={this.handleSearch}
              />
            <button
              className='btn btn-success'
              onClick={() => this.handleSubmit}>Go!
            </button>
          </div>
        </div>
    ) 
  }
}
