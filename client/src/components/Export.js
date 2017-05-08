import './Chart.css';
import { ButtonToolbar, Button } from 'react-bootstrap';
import DownloadLink from 'react-download-link'

import React, { Component } from 'react';


class Export extends Component {

  fetchCSV() {
    var url = 'https://dil2yon0pd.execute-api.us-west-2.amazonaws.com/prod/getPlotData'
    var bodydata = {
      'app': 'Simulated',
      'data_type': 'app'
    }

    fetch(url, {
      url: url,
      body: JSON.stringify(bodydata)
    }, function (
  }  
  }
  render() {
    return (
      <div>
        <DownloadLink
          filename="../../appdata.csv"
          label="Save to disk"
          exportFile={() => "My cached data"} />
        <Button bsStyle="primary">Export App Data</Button>
        <Button bsStyle="primary">Export User Data</Button>

      </div>
    );
  }
}

export default Export;