import React from 'react';
import './Subject.css';
import ProfilePic from './ProfilePic.jpg';

class Subject extends React.Component{
  render() {
    return (
      <div id='About' className='subject-description'>
        <div>
          <img src={ProfilePic} width={480} height={480} alt='My Portrait'></img>
        </div>
        <div>
          <div className='summary'>
            <h1 className='title'>About Me</h1>
            Aerospace engineer by trade, Software engineer through hobbies. I am more inclined towards Frontend, but I find the intricacies of Backend to be fascinating, and Fullstack to be thrilling on its own.
            <br></br>
            <br></br>
            In a previous life, my role as a Navy Junior Officer allowed me to understand what it means to lead and to endorse responsibilities, all the while rising to my superiors’ expectations.
            <br></br>
            <br></br>
            Living abroad (meaning for the average Frenchman, outside of France) for a great part of my life has taught me valuable communication skills and openness of mind as well as a mastery of both German and English.
          </div>
        <div>
          <h3 className='subtitle'>Coding:</h3>
          <p>React (HTML, Javascript, CSS), Rust (C), C#, C++, Python</p>

          <h3 className='subtitle'>Languages</h3>
          <p>French (Mother tongue); English (fluent); German (fluent)</p>

          <h3 className='subtitle'>Other:</h3>
          <p>Leadership, Communication, Reporting</p>
        </div>
        </div>
      </div>
    )
  }
}

export default Subject;