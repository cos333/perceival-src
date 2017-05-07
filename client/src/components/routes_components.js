import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import AuthService from '../utils/AuthService'
import Perceival from '../Perceival'
import Container from './Main/Container'
import Home from './Main/Home/Home'
import Login from './Main/Login/Login'

const auth = new AuthService('3aHO4uq2kfezZdBf9zVx7gkrbYduvfn8', 'sheonhan.auth0.com');

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        console.log(auth.loggedIn);
        replace({ pathname: '/login' })
    }
}

export const makeMainRoutes = () => {
    return (
        <Route path="/" component={Container} auth={auth}>
            <IndexRedirect to="/login" />
            <Route path="home" component={Perceival} onEnter={requireAuth} />
            <Route path="login" component={Login} />
            <Route path="perceival" component={Perceival} onEnter={requireAuth} />
        </Route>
    )
}

export default makeMainRoutes
