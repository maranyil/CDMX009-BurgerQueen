import React from 'react'
import './Button.css'

function Button ({title, color}) {
    return(
        <button className={color}>{title}</button>
    )
}

export default Button 