import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'

import s from './Navigation.module.css'
import {PATH} from '../../routes/routes'
import {AuthContext} from '../../context/context'

export const Navigation: React.FC = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logButtonHandler = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <nav className={s.container}>
            {isAuth && <button onClick={logButtonHandler}>Logout</button>}
            <NavLink to={PATH.home} activeClassName={s.active}>Home</NavLink>
            <NavLink to={PATH.posts} activeClassName={s.active}>Posts</NavLink>
        </nav>
    )
}