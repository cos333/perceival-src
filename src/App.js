import React, { Component } from 'react';
import './App.css';
import Chart from './Chart'
import Pi from './Pi'

class App extends Component {
  render() {
    return (
    <div className="row">
        <div className="col-md-6">
            <div className="card">
                <div className="content">
                    <Chart />
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card">
                <div className="content">
                    <Pi />
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
