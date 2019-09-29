import React from 'react';
    
export default class CityInfo extends React.Component {
    
  render() {
    const {city, lat, lon, temp, pressure, humidity, lowTemp, highTemp, windSpeed} = this.props;
    return (
        <div className='container'>
          <div className='card'>
            <h4 className='card-header bg-primary mb-3 text-light'>City Information</h4> 
          <div className='card-body'>
            <h2 className='card-title text-center'>{city}</h2>
            <p className='text-center'>{lat}, {lon}</p>
            <div className='row'>
                <div className='col'>
                  <h5 className='text-center'>Temperature(F)</h5>
                  <p className='text-center'>{temp + 'F'}</p>
                </div>
                <div className='col'>
                  <h5 className='text-center'>Pressure</h5>
                  <p className='text-center'>{pressure}</p>
                </div>
                <div className='col'>
                  <h5 className='text-center'>Humidity(%)</h5>
                  <p className='text-center'>{humidity + '%'}</p>
                </div>
                <div className='col'>
                  <h5 className='text-center'>Lowest Temperature(F)</h5>
                  <p className='text-center'>{lowTemp + 'F'}</p>
                </div>
                <div className='col'>
                  <h5 className='text-center'>Highest Temperature(F)</h5>
                  <p className='text-center'>{highTemp + 'F'}</p>
                </div>
                <div className='col'>
                  <h5 className='text-center'>Wind Speed(mph)</h5>
                  <p className='text-center'>{windSpeed + 'mph'}</p>
                </div>
            </div>
          </div>             
          </div>
        </div>
    ) 
  }
}
