import React from 'react';
import { Router } from 'react-router';
import './App.css';

class App extends React.Component {
  render () {
     return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
     )
   }
}

export default App;