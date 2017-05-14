import './Perceival.css';

import React, {Component} from 'react';

import Barchart from './components/Barchart';
import Export from './components/Export';
import Linechart from './components/Linechart';
import Piechart from './components/Piechart';

class Perceival extends Component {
    
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
                        <Export auth={this.props.auth}/> 
                    </div> 
                </div>
            </div>
        );
    }
}

export default Perceival;