import './Chart.css';
import React, {Component} from 'react';
import DropdownThree from './DropdownThree';
import Line from './Line';

import {prettifySegment} from './Barchart';

export function prettifyResponse(x, display) {
  if (display === 'average') {
    var qualifier = 'Mean';
  } else if (display === 'sum') {
    var qualifier = 'Total';
  } else {
    var qualifier = 'Unknown qualifier (' + display + ')'
  }

  if (x === 'numclicks') {
    var latterText = '# of clicks'
  } else if (x === 'centsspent') {
    var latterText = 'user spending (cents)'
  } else if (x === 'secondsspent') {
    var latterText = 'time spent (seconds)'
  } else {
    var latterText = 'unknown response: (' + x + ')';
  }

  return qualifier + ' ' + latterText
}

class Linechart extends Component {
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
      display: [{name: 'Average', key: 'average'}, {name: 'Sum', key: 'sum'}],
      currentResponse: 'numclicks',
      currentSegment: 'age',
      currentDisplay: 'average',
      dataset: []
    };

    this.updateResponse = this.updateResponse.bind(this);
    this.updateSegment = this.updateSegment.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchData(
        this.state.currentResponse, this.state.currentSegment,
        this.state.currentDisplay);
  };

  handleClick(key) {
    console.log('handleClick Called. Key is ' + key);
    var responses = ['numclicks', 'centsspent', 'secondsspent'];
    var segments = ['age', 'country', 'gender', 'language'];
    var displays = ['average', 'sum']

        if (responses.includes(key)) {
      this.updateResponse(key);
    }
    else if (segments.includes(key)) {
      this.updateSegment(key);
    }
    else if (displays.includes(key)) {
      this.updateDisplay(key);
    }
    else {
      console.log('No such key');
    }
  }

  updateResponse(response) {
    console.log('Update response');
    this.fetchData(
        response, this.state.currentSegment, this.state.currentDisplay);
  }

  updateSegment(segment) {
    console.log('Update segment');
    this.fetchData(
        this.state.currentResponse, segment, this.state.currentDisplay);
  }
  updateDisplay(display) {
    console.log('Update display');
    this.fetchData(
        this.state.currentResponse, this.state.currentSegment, display);
  }

  fetchData(response, segment, display) {
    var data = {
      'plot': 'timeseries',
      'response': response,
      'segment': segment,
      'display': display
    };
    var url =
        'https://dil2yon0pd.execute-api.us-west-2.amazonaws.com/prod/getPlotData'

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
          this.setState({
            dataset: data,
            currentResponse: response,
            currentSegment: segment,
            currentDisplay: display
          });
          this.refs.linechart.createLines();
        })
        .catch((err) => {
          console.log(err.message);
        });
  }

  render() {
    return (<div className='Chart' id="Linechart">
      <DropdownThree onClick={
      (key) => this.handleClick(key)} response={
      this.state.response} segment={
      this.state.segment} display={
      this.state.display} title='Timeseries' hasSegment={
      true} />
      
      <h4 className='text-center text-semibold plot-title'>
        {prettifyResponse(this.state.currentResponse, this.state.currentDisplay)} vs. {prettifySegment(this.state.currentSegment)}
      </h4>

      <Line ref='linechart' response={this.state.response} segment={this.state.segment} display={this.state.display} dataset={this.state.dataset} />
    </div>);
  }
}

export default Linechart;