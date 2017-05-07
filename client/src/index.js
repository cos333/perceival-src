import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Nav from './Nav';
import Main from './Main';
import './index.css';


const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Main}/>
        <Route path="/perceival" component={App}/>
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
