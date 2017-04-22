import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import Timeseries from './Timeseries';
import Pi from './Pi';
//import Time from './Time';
import Bar from './Bar';

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
                            <Timeseries />
                    </div>
                </div>
            </div>
        </div>
        <div id="row2" className="row">
            <div className="col-md-6">
                <div className="card">
                        <div className="content">
                        <Bar />    
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
    </div>
    );
  }
}

export default App;
