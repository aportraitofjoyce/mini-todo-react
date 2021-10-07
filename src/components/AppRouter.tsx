import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PATH, routes} from '../routes/routes'

export const AppRouter: React.FC = () => {
    return (
        <Switch>
            {routes.map(r => <Route path={r.path} component={r.component} exact={r.exact}/>)}
            <Redirect to={PATH.posts}/>
        </Switch>
    )
}