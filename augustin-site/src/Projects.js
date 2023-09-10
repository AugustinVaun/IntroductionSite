import React from 'react';
import './Projects.css';

function ProjectExample (props) {
  return(
    <div className='project-X'>
        <a href={props.link} target='_blank' rel="noreferrer">{props.title}</a>
        <p>This right here is a simple project description of what I have done</p>
        <br></br>
        <h3>Language:</h3>
        <p>{props.language} for example</p>
      </div>
  )
}


class Projects extends React.Component{
  render() {
    return (
      <div>
        <h1 font-size="x-large">Portfolio</h1>
        <div id='Portfolio' className='projects'>
          <ProjectExample link="https://github.com/AugustinVaun/FileSorter" title="FileSorter" language="Python"/>
          <ProjectExample link="https://github.com/AugustinVaun/PrimeDecomposition" title="PrimeDecomposition" language="Rust" />
        </div>
      </div>
    )
  }
}


    

export default Projects;