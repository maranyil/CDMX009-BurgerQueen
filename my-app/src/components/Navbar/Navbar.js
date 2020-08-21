import React from 'react'
import { useLocation } from 'react-router-dom'
import './Navbar.css'

const changeTitle = (pathname) => {
    switch(pathname){
        case '/new-order':
            return 'New';
        case '/incoming':
            return 'Incoming';
        case '/ready':
            return 'Ready';
    }
}

function Navbar() {
    const { pathname } = useLocation()    
    return(
        <div className= "topbar">
            <h1>Burger Queen / <span className="white"> {changeTitle(pathname)} </span> </h1>
        </div>
    )
}

export default Navbar