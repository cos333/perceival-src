import React from 'react'
import {IndexRedirect, Route} from 'react-router'

import Perceival from '../Perceival'
import AuthService from '../utils/AuthService'

import Container from './Main/Container'
import Home from './Main/Home/Home'
import Login from './Main/Login/Login'

const auth =
    new AuthService('3aHO4uq2kfezZdBf9zVx7gkrbYduvfn8', 'sheonhan.auth0.com');

// onEnter callback to validate authentication in private routes
const requireAuth =
    (nextState, replace) => {
      if (!auth.loggedIn()) {
        replace({pathname: '/login'})
      }
      else console.log("Logged In");  
    }

export const makeMainRoutes = () => {
    return (
        <Route path='/' component={Container} auth={auth}>
            <IndexRedirect to='/perceival' />
            <Route path='perceival' component={Perceival} onEnter={requireAuth} />
            <Route path="login" component={Login} />
        </Route>
    )
}

export default makeMainRoutes
