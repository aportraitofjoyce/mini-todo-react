import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Navigation} from './components/Navigation/Navigation'
import {AppRouter} from './components/AppRouter'

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <AppRouter/>
        </BrowserRouter>
    )
}