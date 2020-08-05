import React from 'react'
import './Button.css'

function Button ({title, saveOrder}) {
    return(
        <button 
            className="yellowbtn waves-effect waves-light"
            onClick={saveOrder}>
                {title}
        </button>
    )
}

export default Button 