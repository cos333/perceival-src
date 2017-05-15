import './Perceival.css';

import React, { Component } from 'react';

import Barchart from './components/Barchart';
import Export from './components/Export';
import Linechart from './components/Linechart';
import Piechart from './components/Piechart';
import Register from './components/Register';

class Perceival extends Component {

    render() {
        return (
            <div>
                <div id='row0' className='row red-banner'>
                    <div className='col-md-10'>
                        Hello {this.props.auth.getProfile().given_name}. You do not have an app registered with Perceival. You will be able to interact with partially simulated data from our demo app.
                    </div>
                    <div className='col-md-2'>
                        <Register auth={this.props.auth}/>
                    </div> 
                </div>

                <hr className="horizontal-ruler" />

                <div id='row1' className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='content'>
                                <Piechart />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="content">
                                <Barchart />
                            </div>
                        </div>
                    </div>
                </div>
                <div id='row2' className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='content'>
                                <Linechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div id='row2' className='row'>
                    <div className='col-md-12'>
                        <Export auth={this.props.auth} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Perceival;