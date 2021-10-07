import React, {useEffect, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Navigation} from './components/Navigation/Navigation'
import {AppRouter} from './components/AppRouter'
import {AuthContext} from './context/context'

export const App: React.FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) setIsAuth(true)
        setIsLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
            <BrowserRouter>
                <Navigation/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}