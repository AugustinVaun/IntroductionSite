import React from 'react';
import './Topbar.css';



class Topbar extends React.Component {
  render(){
    return(
        <div className='moving-topbar'>
          <div className='main-name'>
          <h1>Augustin VAUNIER</h1>
          </div>
          <div className='widget-list'>
            <p>Home</p>
            <p>About</p>
            <p>Portfolio</p>
            <p>LinnkedIn</p>
            <p>Github</p>
          </div>
        </div>
    )
  }
}

export default Topbar;