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
            <a href='#Home' className='widget-item'>Home</a>
            <a href='#About' className='widget-item'>About</a>
            <a href='#Portfolio' className='widget-item'>Portfolio</a>
            <a href='https://www.linkedin.com/in/augustin-dominique-vaunier/' target="_blank" rel="noreferrer" className='widget-item'>LinkedIn</a>  {/*using target="_blank" allows to open the clicked link in a new tab*/}
            <a href='https://github.com/AugustinVaun' className='widget-item' target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
    )
  }
}

export default Topbar;