import './App.css';

import React, { Component } from 'react';

import Bar from './Bar';
import Chart from './Chart';
import Pie from './Pie';
import Piechart from './Piechart';
import Timeseries from './Timeseries';
import Line from './Line';


class App extends Component {
    render() {
        return (
            <div>
                <div id='row1' className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='content'>
                                <Pie width="300px" height="300px" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="content">
                                <Line />
                            </div>
                        </div>
                    </div>
                </div>
                <div id='row2' className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='content'>
                                {/*<Piechart />    */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="content">
                                <Chart />
                            </div>
                        </div>
                    </div>
                </div>
                <Line />
            </div>
        );
    }
}

export default App;
