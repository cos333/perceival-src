import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import App from './App';
import Nav from './components/Nav';
import Main from './components/Main';
import './index.css';

import AuthService from './utils/AuthService';
const auth = new AuthService('3aHO4uq2kfezZdBf9zVx7gkrbYduvfn8', 'sheonhan.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Main}/>
        <Route path="/perceival" component={App} />
        {/*<Route path="/special" component={}/>*/}
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
