import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { isLogged } from '../services/auth'

const ProtectedRoute = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const checkLogin = async ()=>{
            const statusSession = await isLogged()
            setIsLoggedIn(statusSession)
            setLoading(false)
        }
        checkLogin()
    },[])

    if(loading){
        return <h1>Loading...</h1>
    }

    if(!isLoggedIn){
        return <Navigate to={'/login'} replace/>
    }

    return children
}

export default ProtectedRoute