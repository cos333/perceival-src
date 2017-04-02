import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart'
import Pi from './Pi'
import Column from './Column'

class App extends Component {
  render() {
    return (
      <div>
      <Chart />
      <Pi /> 
      <Column />
      </div>  
    );
  }
}

export default App;
