import React, { Component } from 'react';
import axios from 'axios';

class Pi extends Component {
  render() {
    return (
      <div className="Pi">
        <div className="Pi-header">
          <iframe width="100%" height="500" frameBorder="0" scrolling="no"
            src="https://borac1eor6.execute-api.us-west-2.amazonaws.com/test/"></iframe>
        </div>
        <p className="Pi-intro">
        </p>
      </div>
    );
  }
}

export default Pi;