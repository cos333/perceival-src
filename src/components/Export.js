import './Export.css';
import React, { PropTypes as T } from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';

class Export extends React.Component {
  static contextTypes = { router: T.object };
  
  constructor(props, context) {
    super(props, context);
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
    var data = {'app': 'Simulated', 'data_type': dataType};
    const searchParams = Object.keys(data)
                             .map((key) => {
                               return encodeURIComponent(key) + '=' +
                                   encodeURIComponent(data[key]);
                             })
                             .join('&');
    fetch(url, {method: 'POST', body: searchParams})
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (typeIsApp)
            this.setState({appPath: data.url});
          else
            this.setState({userPath: data.url});
        })
        .catch((err) => {
          console.log(err.message);
        });
  };

  logout() {
    this.props.auth.logout();
    this.context.router.push('/login');
  }

  render() {
    return (
      <div>
        <span className='export-button'>
          <Button bsStyle='primary'>
            <a id='app' href={
      this.state.appPath} download>Export App Data</a>
          </Button>
        </span>
        <span className='export-button'>
          <Button bsStyle='primary' >
            <a id='user' href={this.state.userPath} download>Export User Data</a>
          </Button>
        </span>
        
        <span className='pull-right logout'>
          <Button bsStyle='danger' onClick={this.logout.bind(this)}>
            Logout
          </Button>
        </span>
      </div>);
       }
}

export default Export;