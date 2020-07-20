import React from 'react'
import './Forms.css'

function Forms() {
    return(
        <div className = "input-form">
             <form className = "form">
              <input className = 'inputf' type = 'email' placeholder = 'Email'></input> <br/>
              <input className = 'inputf' type = 'password' placeholder = 'Password'></input> <br/>
              <button className = 'btn' id = 'loginBtn'> Log In </button>
            </form>
        </div>
    )
}

export default Forms