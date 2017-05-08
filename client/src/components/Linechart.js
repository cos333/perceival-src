import './Chart.css';

import React, { Component } from 'react';

import Dropdown from './Dropdown';
import Line from './Line';

class Linechart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [
        { name: 'Number of Clicks', key: 'numclicks' },
        { name: 'Cents Spent', key: 'centsspent' },
        { name: 'Seconds Spent', key: 'secondsspent' }
      ],
      segment: [
        { name: 'Age', key: 'age' }, { name: 'Country', key: 'country' },
        { name: 'Gender', key: 'gender' }, { name: 'Language', key: 'language' }
      ],
      url: '',
      currentResponse: 'numclicks',
      currentSegment: 'age',
      dataset: [
        {
          'y': [
            84.685, 82.2302, 74.8333, 67.0522, 69.9355, 60.063,
            58.3254, 52.8537, 49.9076, 45.3233, 43.5042, 38.8651,
            35.5366, 28.6142, 28.5484, 25.7917, 22.7398, 21.4844,
            19.6694, 16.0917, 15.3893, 16.6529, 13.3051, 12.8548,
            12.1864, 11.9141, 10.9597, 10.9748, 10.3689, 10.281
          ],
          'x': [
            '2004-05-01', '2004-05-02', '2004-05-03', '2004-05-04',
            '2004-05-05', '2004-05-06', '2004-05-07', '2004-05-08',
            '2004-05-09', '2004-05-10', '2004-05-11', '2004-05-12',
            '2004-05-13', '2004-05-14', '2004-05-15', '2004-05-16',
            '2004-05-17', '2004-05-18', '2004-05-19', '2004-05-20',
            '2004-05-21', '2004-05-22', '2004-05-23', '2004-05-24',
            '2004-05-25', '2004-05-26', '2004-05-27', '2004-05-28',
            '2004-05-29', '2004-05-30'
          ],
          'label': '18-24'
        },
        {
          'y': [
            37.3799, 41.1144, 33.7435, 31.0562, 31.5517, 26.6709,
            23.3304, 20.2408, 20.5238, 17.8667, 16.3933, 17.7511,
            15.0348, 14.0506, 13.3625, 11.6926, 11.9504, 11.3699,
            10.2377, 10.9261, 10.2769, 10.1087, 10.1715, 10.1709,
            10.2876, 10.0, 10.0544, 10.0325, 10.0, 10.0171
          ],
          'x': [
            '2004-05-01', '2004-05-02', '2004-05-03', '2004-05-04',
            '2004-05-05', '2004-05-06', '2004-05-07', '2004-05-08',
            '2004-05-09', '2004-05-10', '2004-05-11', '2004-05-12',
            '2004-05-13', '2004-05-14', '2004-05-15', '2004-05-16',
            '2004-05-17', '2004-05-18', '2004-05-19', '2004-05-20',
            '2004-05-21', '2004-05-22', '2004-05-23', '2004-05-24',
            '2004-05-25', '2004-05-26', '2004-05-27', '2004-05-28',
            '2004-05-29', '2004-05-30'
          ],
          'label': '25-34'
        },
        {
          'y': [
            66.7593, 63.2982, 62.1636, 42.3158, 47.8519, 45.8421,
            41.7759, 38.0455, 30.5185, 26.7455, 27.4035, 28.5172,
            22.5873, 19.3167, 20.8393, 17.3621, 15.3273, 16.5439,
            14.1636, 14.3396, 15.5614, 10.7368, 10.36, 10.9492,
            11.5614, 10.6271, 10.5185, 10.2143, 10.6667, 10.0
          ],
          'x': [
            '2004-05-01', '2004-05-02', '2004-05-03', '2004-05-04',
            '2004-05-05', '2004-05-06', '2004-05-07', '2004-05-08',
            '2004-05-09', '2004-05-10', '2004-05-11', '2004-05-12',
            '2004-05-13', '2004-05-14', '2004-05-15', '2004-05-16',
            '2004-05-17', '2004-05-18', '2004-05-19', '2004-05-20',
            '2004-05-21', '2004-05-22', '2004-05-23', '2004-05-24',
            '2004-05-25', '2004-05-26', '2004-05-27', '2004-05-28',
            '2004-05-29', '2004-05-30'
          ],
          'label': '35-44'
        }
      ]
    };

    this.updateResponse = this.updateResponse.bind(this);
    this.updateSegment = this.updateSegment.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // var obj = {
    //   method: 'GET',
    //   headers: { 'response': 'numclicks', 'segment': 'age' }
    // };
    // console.log("Hello");
    // fetch(
    //   'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getPlotData',
    //   obj)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({ url: data.url });
    //   });
  };

  handleClick(key) {
    console.log('handleClick Called. Key is ' + key);


    // var obj = {
    //   method: 'GET',
    //   headers: { 'response': 'numclicks', 'segment': 'age' }
    // };

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
    console.log('updateResponse called');

    this.setState(
      {
        dataset: [
          { 'Client': 'ABC', 'sale': '300', 'year': '2000' },
          { 'Client': 'ABC', 'sale': '400', 'year': '2002' },
          { 'Client': 'ABC', 'sale': '500', 'year': '2004' },
          { 'Client': 'ABC', 'sale': '400', 'year': '2006' },
          { 'Client': 'ABC', 'sale': '300', 'year': '2008' },
          { 'Client': 'ABC', 'sale': '200', 'year': '2010' },
        ]
      },
      () => {
        console.log(this.state.dataset);
        this.refs.line.updateLine();
      });
  }

  updateSegment(segment) {
    console.log('updateSegment called');
    var obj = {
      method: 'GET',
      headers: { 'response': this.state.currentResponse, 'segment': segment }
    };

    fetch(
      'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getMeanBarPlot',
      obj)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ currentSegment: segment, url: data.url });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (<div className='Chart'>
      <Dropdown onClick={
        (key) => this.handleClick(key)
      } response={
        this.state.response
      } segment={
        this.state.segment
      } title='Timeseries'
        hasSegment={true} />
      <Line ref='line' width="500px" height="500px" dataset={this.state.dataset} />
    </div>);
  }
}

export default Linechart;