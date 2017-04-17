import React, { Component } from 'react';
import './App.css';
import Chart from './Chart'
import Pi from './Pi'
import Force from './Force'

class App extends Component {
  render() {
    return (
    <div>
        <div id="row1" className="row">
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
        <div id="row2" className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="content">
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="content">
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
