import React from 'react';
import './Subject.css';


class Subject extends React.Component{
  render() {
    return (
      <div className='subject-description'>
        <div className='profile-picture'>
          <div className='main-description'>
            <div className='summary'>
            <p>Lorem ipsum etc</p>
            </div>
          <div className='skills'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Subject;