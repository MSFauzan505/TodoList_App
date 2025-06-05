import React from 'react'

const ProtectedRoute = ({children}) => {
    const isLogged = false

    if(isLogged){
        return <h1>Anda belum login</h1>
    }

    return children
}

export default ProtectedRoute