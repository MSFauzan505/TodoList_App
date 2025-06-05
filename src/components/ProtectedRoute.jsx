import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const isLogged = false

    if(!isLogged){
        return <Navigate to={'/login'} replace/>
    }

    return children
}

export default ProtectedRoute