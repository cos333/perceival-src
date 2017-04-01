import React, { Component } from 'react';
import axios from 'axios';


class Chart extends Component {
  render() {
    return (
      <div className="Chart">
        <div className="Chart-header">
          <iframe width="100%" height="800" frameborder="0" scrolling="no"
            src="https://s3-us-west-2.amazonaws.com/perceival-html-plots/default/sample-scatter.html"></iframe>
        </div>
        <p className="Chart-intro">
        </p>
      </div>
    );
  }
}

export default Chart;