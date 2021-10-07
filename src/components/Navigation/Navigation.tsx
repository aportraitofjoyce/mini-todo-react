import React from 'react'
import {NavLink} from 'react-router-dom'

import s from './Navigation.module.css'
import {PATH} from '../../routes/routes'

export const Navigation: React.FC = props => {
    return (
        <nav className={s.container}>
            <NavLink to={PATH.home} activeClassName={s.active}>Home</NavLink>
            <NavLink to={PATH.posts} activeClassName={s.active}>Posts</NavLink>
        </nav>
    )
}