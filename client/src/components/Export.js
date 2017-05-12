import './Export.css';

import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import DownloadLink from 'react-download-link'


class Export extends Component {
  constructor() {
    super();
    this.state = { appPath: '', userPath: '' }
  }

  componentDidMount() {
    this.fetchCSV('app');
    this.fetchCSV('user');
  };

  fetchCSV(dataType) {
    var typeIsApp = dataType == 'app' ? true : false;
    var url =
      'https://dil2yon0pd.execute-api.us-west-2.amazonaws.com/prod/getCSV';
    var data = { 'app': 'Simulated', 'data_type': dataType };
    const searchParams = Object.keys(data)
      .map((key) => {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(data[key]);
      })
      .join('&');
    fetch(url, { method: 'POST', body: searchParams })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (typeIsApp)
          this.setState({ appPath: data.url });
        else
          this.setState({ userPath: data.url });
      })
      .catch((err) => {
        console.log(err.message);
      });

  };

  render() {
    return (
      <div>
        <Button bsStyle='primary' id='app'>
          <a href={this.state.appPath} download>Export App Data</a>
        </Button>
        <Button bsStyle='primary' id='user'>
          <a href={this.state.userPath} download>Export User Data</a>
        </Button>
        
        <span className="pull-right logout">
          <Button bsStyle='danger'>
            {/*implement session clear on click https://auth0.com/docs/videos/session-and-cookies*/}
            <a href={'https://sheonhan.auth0.com/v2/logout?returnTo=http%3A%2F%2Fperceival.tech/demo'}>Logout</a>
          </Button>
        </span>
      </div>);
       }
}

export default Export;