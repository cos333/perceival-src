import * as d3 from 'd3';
import React, {Component} from 'react';

class Bars extends Component {
  constructor() {
    super();
    this.createBars = this.createBars.bind(this);
  }

  componentDidMount() {
      this.createBars();
  }

  createBars() {
      
  };  

  render() {
    return (<div ref='error'></div>);
  }
}

export default Bars;