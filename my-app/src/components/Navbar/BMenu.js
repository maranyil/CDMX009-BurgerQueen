import React from 'react'
import './BMenu.css'


function BMenu(props) {
    return(
        <div className="bMenu">
  <nav role="navigation">
  <div className="menuToggle">
    <input type="checkbox" />
  
    <span></span>
    <span></span>
    <span></span>
    
    <ul className="menu">
      <h1> Orders </h1>
      <a href="#"><li>New</li></a>
      <a href="#"><li>Incoming</li></a>
      <a href="#"><li>Ready</li></a>
    </ul>
  </div>
</nav>
</div>
    )
}



export default BMenu