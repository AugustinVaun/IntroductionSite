import React from 'react';
import './Subject.css';
import ProfilePic from './ProfilePic.jpg';

class Subject extends React.Component{
  render() {
    return (
      <div id='About' className='subject-description'>
        <div className='profile-picture'>
          <img src={ProfilePic} width={720} height={720}></img>
        </div>
        <div className='main-description'>
          <div className='summary'>
          <p>Lorem ipsum etc</p>
          </div>
        <div className='skills'>

        </div>
        </div>
      </div>
    )
  }
}

export default Subject;