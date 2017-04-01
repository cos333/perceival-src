import React, { Component } from 'react';
import logo from './logo.svg';
import { Col } from 'react-bootstrap';
import './App.css';
import Chart from './Chart'
import Pi from './Pi'

class App extends Component {
  render() {
    return (
      <div>
        <Col md={6} mdPull={6} />
        <Col md={6} mdPush={6} />
      <Chart />
      <Pi />
      </div>  
    );
  }
}

export default App;
