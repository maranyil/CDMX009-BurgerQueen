import React from 'react'
import './Navbar.css'

function Navbar({section}) {
    return(
        <div className= "topbar">
            <h1>Burguer Queen / {section} </h1>
        </div>
    )
}

export default Navbar