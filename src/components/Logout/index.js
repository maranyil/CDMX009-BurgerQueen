import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import { AuthContext } from '../../Auth'
import logoutIcon from '../../img/logout.svg'
import { auth } from '../../firebase'

function Logout() {

    const { currentUser } = useContext(AuthContext)

    if (!currentUser){
        return <Redirect to='/login' />
      }

    const signOut = () => { auth.signOut() } 

    return(
        <>
        <img 
            className="logout"
            onClick={signOut}
            src={logoutIcon}
            alt="logout icon">
        </img> 
        </>
    )

}

export default Logout