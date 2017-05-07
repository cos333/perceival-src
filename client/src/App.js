import './App.css';

import React, { Component } from 'react';

import Barchart from './Barchart';
import Piechart from './Piechart';
import Linechart from './Linechart';
import Errorchart from './Errorchart';

class App extends Component {
    render() {
        return (
            <div>
                <div id='row1' className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='content'>
                                <Piechart/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="content">
                                <Linechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div id='row2' className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='content'>
                                <Barchart />
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
