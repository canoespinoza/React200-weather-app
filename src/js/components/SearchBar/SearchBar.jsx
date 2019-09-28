import React from 'react';

import { getWeather, searchCity } from './searchAction';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(searchCity(value));
    }

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch, name } = this.props;
        dispatch(getWeather(name));
    }
    
  render() {
    const {name} = this.props
    return (
        <div className='container'>
          <div className='btn-group' role='group'>
            <button 
              type='button'
              className='btn btn-primary' 
              name='San Diego'
              onClick={this.handleSubmit}>San Diego
            </button>
            <button 
              type='button'
              className='btn btn-primary' 
              name='New York'
              onClick={this.handleSubmit}>New York
            </button>
            <button
              type='button' 
              className='btn btn-primary' 
              name='Washington D.C.'
              onClick={this.handleSubmit}>Washington D.C.
            </button>
            <button
              type='button' 
              className='btn btn-primary' 
              name='London'
              onClick={this.handleSubmit}>London
            </button>
            <button 
              type='button'
              className='btn btn-primary' 
              name='Tokyo'
              onClick={this.handleSubmit}>Tokyo
            </button>
          </div>
          <div className='form-group'>
            <input
              type='city'
              className='form-control'
              placeholder='Enter city'
              value={name}
              onChange={this.handleChange}
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
