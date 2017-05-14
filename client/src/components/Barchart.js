/* eslint-disable */

import './Chart.css';

import React, {Component} from 'react';

import Bar from './Bar';
import DropdownTwo from './Dropdown';

function prettifyResponse(x) {
  if (x === 'numclicks') {
    return 'Mean # of clicks'
  } else if (x === 'centsspent') {
    return 'Mean user spending (cents)'
  } else if (x === 'secondsspent') {
    return 'Mean time spent (seconds)'
  } else {
    return 'Unknown response: (' + x + ')';
  }
}

export function prettifySegment(x) {
  if (x === 'age') {
    return 'age (years)'
  } else if (x === 'country') {
    return 'country'
  } else if (x === 'gender') {
    return 'gender'
  } else if (x === 'language') {
    return 'language'
  } else {
    return 'unknown segment: (' + x + ')';
  }
}

class Barchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [
        {name: 'Number of Clicks', key: 'numclicks'},
        {name: 'Cents Spent', key: 'centsspent'},
        {name: 'Seconds Spent', key: 'secondsspent'}
      ],
      segment: [
        {name: 'Age', key: 'age'}, {name: 'Country', key: 'country'},
        {name: 'Gender', key: 'gender'}, {name: 'Language', key: 'language'}
      ],
      currentResponse: 'numclicks',
      currentSegment: 'age',
      dataset: []
    };

    this.updateResponse = this.updateResponse.bind(this);
    this.updateSegment = this.updateSegment.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.state.currentResponse, this.state.currentSegment);
  };

  handleClick(key) {
    console.log('handleClick Called. Key is ' + key);

    var responses = ['numclicks', 'centsspent', 'secondsspent'];
    var segments = ['age', 'country', 'gender', 'language'];

    if (responses.includes(key)) {
      this.updateResponse(key);
    } else if (segments.includes(key)) {
      this.updateSegment(key);
    } else {
      console.log('No such key');
    }
  }


  updateResponse(response) {
    console.log('Update response');
    this.fetchData(response, this.state.currentSegment);
  }

  updateSegment(segment) {
    console.log('Update segment');
    this.fetchData(this.state.currentResponse, segment);
  }

  fetchData(response, segment) {
    var data = { 'plot': 'bar', 'response': response, 'segment': segment };
    var url =
      'https://dil2yon0pd.execute-api.us-west-2.amazonaws.com/prod/getPlotData'

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
        this.setState({
          dataset: data,
          currentResponse: response,
          currentSegment: segment
        });
        this.refs.bar.createBars();
      })
      .catch((err) => {
        console.log(err.message);
      });
    
    fetch('http://localhost:3001/api')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
      });
  }

  render() {
    return (
      <div>
        <div className='Chart' id="Barchart">
          <DropdownTwo 
            onClick={ (key) => this.handleClick(key) } 
            response={ this.state.response }
            segment={ this.state.segment }
            hasSegment={ true }
            title='Bar Plot' />
          <h4 className='text-center text-semibold plot-title'>
            {prettifyResponse(this.state.currentResponse)} vs. {prettifySegment(this.state.currentSegment)}
          </h4>
          <Bar ref = 'bar' dataset={this.state.dataset} 
          response={this.state.currentResponse} segment={this.state.currentSegment}/>
        </div>
      </div>
      );
  }
}

export default Barchart;