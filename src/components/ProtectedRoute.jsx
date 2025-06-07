import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { isLogged } from '../services/auth'

const ProtectedRoute = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState()

    useEffect(()=>{
        const checkLogin = async ()=>{
            const statusSession = await isLogged()
            setIsLoggedIn(statusSession)
        }
        checkLogin()
    },[])

    if(isLoggedIn === null){
        return null
    }

    if(!isLoggedIn){
        return <Navigate to={'/'} replace/>
    }

    return children
}

export default ProtectedRoute