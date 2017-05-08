import './Chart.css';
import { ButtonToolbar, Button } from 'react-bootstrap'

import React, { Component } from 'react';


class Export extends Component {
  render() {
    return (
      <div>
        <Button bsStyle="primary">Export App Data</Button>
        <Button bsStyle="primary">Export User Data</Button>

      </div>
    );
  }
}

export default Export;