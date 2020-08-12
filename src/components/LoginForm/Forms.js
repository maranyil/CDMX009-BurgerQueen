import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import { AuthContext } from '../../Auth'
import LogoBQ from '../../img/LogoBQ.svg'
import { auth } from '../../firebase'
import './Forms.css'

const Forms = ({ history }) => {

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth
      .signInWithEmailAndPassword(email.value, password.value)
      .then((result) => {
        console.log(result)
        history.push("/new-order")

      })
    } catch (err) {
      alert(err);
    }
  }, [history]);

  const { currentUser } = useContext(AuthContext)

  if (currentUser){
    return <Redirect to='/new-order' />
  }

  return (
    <>
    <div className="input-form"
    style={
      { backgroundColor: '#B8AAE0 !important'}
  }
    >
      <img
        className="bq-logo"
        src={LogoBQ}
        alt="Logo Burger Queen" />
      <h1>Inicio de sesión</h1>
    
      <form 
        onSubmit={handleSignUp}
        className="form-container">
          <input 
            className="inputf"
            name="email" 
            type="email" 
            placeholder="Email" />

          <input 
            className="inputf"
            name="password" 
            type="password" 
            placeholder="Password" 
            />

          <button 
            className="btn"
            type="submit"
          >
              Sign In
          </button>
      </form>
    </div>
    </>
  );
};

export default withRouter(Forms);