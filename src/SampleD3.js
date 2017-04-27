import * as d3 from 'd3'
import React, {Component} from 'react';
import Faux from 'react-faux-dom';

class SampleD3 extends Component {
  constructor(props) {
    super(props);
    this.state = {chart: 'data'};
  }

  componentDidMount() {
    const faux = this.connectFauxDOM('div.renderedD3', 'chart');

    d3.select(faux).append('div').html('Hello World!')

  }

  render() {
    return (
      <div>
        <h2>Here is some fancy data:</h2>
        <div className='renderedD3'>
          {this.state.chart}
        </div>
      </div>
    )
  }
}

export default SampleD3