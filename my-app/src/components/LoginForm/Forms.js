import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import { AuthContext } from '../../Auth'
import LogoBQ from '../../img/LogoBQ.png'
import { auth } from '../../firebase'

const Forms = ({ history }) => {

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, username } = event.target.elements;
    try {
      await auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((snap) => {
        snap.user.updateProfile({
          displayName: username.value 
        });
      })
      .then(() => {
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
    <div className="forms-container">
      <h1>Inicio de sesión</h1>
      <form onSubmit={handleSignUp}>
      <label>
          Username
          <input name="username" type="text" placeholder="Username" />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(Forms);