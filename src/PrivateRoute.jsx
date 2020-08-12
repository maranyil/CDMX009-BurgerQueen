import React, { useContext } from 'react'
import { AuthContext } from './Auth'
import { Redirect, Route } from 'react-router-dom'


const PrivateRoute = (props) => {
    const { currentUser, pending } = useContext(AuthContext)

    if (pending) {
        return <div>Loading...</div>
    }

    if (!currentUser) {
        return <Redirect to='/' />
    }
    
    return <Route {...props} />
}

export default PrivateRoute