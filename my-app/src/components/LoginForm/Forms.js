import React, {useState} from 'react'
import 'firebase/auth'
import firebase from 'firebase/app'
import './Forms.css'

function Forms(props) {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const user = firebase.auth().currentUser;

  const login = async() => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  }

  const logout = async() => {
    await firebase.auth().signOut();
  }

        return (
        <div>
          { !user &&
          <div className = "input-form">
             <form className = "form">
              <input className = 'inputf' type = 'email' id = 'email' placeholder = 'Email'
              onChange = { (ev)=> setEmail(ev.target.value) }></input> <br/>
              <input className = 'inputf' type = 'password' id = 'password' placeholder = 'Password' 
              onChange = { (ev)=> setPassword(ev.target.value) }></input> <br/>
              <button className = 'btn' id = 'loginBtn' onClick = {login}> Login </button>
            </form>
            </div>
          }
          { user &&
      <button className = 'btn' id = 'logoutBtn' onClick = {logout}> Log Out</button>
          }
      </div> )
}

export default Forms