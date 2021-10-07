import React, {useContext} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PATH, privateRoutes, publicRoutes} from '../routes/routes'
import {AuthContext} from '../context/context'
import {Progress} from './UI/Progress/Progress'

export const AppRouter: React.FC = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Progress/>
    }

    return (
        <>
            {isAuth &&
			<Switch>
                {privateRoutes.map(r => <Route key={r.path}
                                               path={r.path}
                                               component={r.component}
                                               exact={r.exact}/>)}
				<Redirect to={PATH.home}/>
			</Switch>}

            {!isAuth &&
			<Switch>
                {publicRoutes.map(r => <Route key={r.path}
                                              path={r.path}
                                              component={r.component}
                                              exact={r.exact}/>)}
				<Redirect to={PATH.login}/>
			</Switch>}
        </>
    )
}