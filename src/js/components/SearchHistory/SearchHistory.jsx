import React from 'react';

export default class SearchHistory extends React.Component {
    
  render() {
   const {history} = this.props
    return (
        <div className='container'>
          <div className='card'>
            <h4 className='card-header bg-primary text-light mb-3'>Search History</h4>
            <div className='card-body'>
                <ul className='list-group'>
                {history.map((history, index) => (
              <li key={ index }>
                <p>
                  {history.city} - {history.date} - {history.time}
                </p>
              </li>
            ))}
                </ul>
            </div>   
          </div>
        </div>
    ) 
  }
}