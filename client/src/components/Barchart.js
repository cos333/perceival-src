import './Chart.css';

import React, {Component} from 'react';

import Bar from './Bar';
import Dropdown from './Dropdown';

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
      url: '',
      currentResponse: 'numclicks',
      currentSegment: 'age',
      dataset: {
        'labels': ['18-24', '25-34', '35-44'],
        'stdevs': [3.0, 2.0, 14.0],
        'means': [35.3315, 17.2052, 25.6531]
      }
    };

    this.updateResponse = this.updateResponse.bind(this);
    this.updateSegment = this.updateSegment.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){};

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
    console.log('updateResponse called');

    var newData = {
      'labels': ['18-24', '25-34', '35-44'],
      'stdevs': [0.5302811935452145, 0.8727200977257314, 1.167953163111855],
      'means': [0.2349, 0.7046, 1.5767]
    };

    this.setState({currentResponse: response, dataset: newData}, () => {
      this.refs.bar.updateBar();
    });
  }

  updateSegment(segment) {
    console.log('updateSegment called');

    var newData = {
      'labels': ['brazil', 'canada'],
      'stdevs': [1.0030301889098718, 0.5812610263110876],
      'means': [0.8632, 0.2884]
    };

    this.setState({currentSegment: segment, dataset: newData}, () => {
      this.refs.bar.updateBar();
    });
  }

  render() {
    return (
      <div className='Chart' id="Barchart">
        <Dropdown onClick={
      (key) => this.handleClick(key)} response={
      this.state.response} segment={
      this.state.segment}
        title='Bar Plot'
    hasSegment =
    {
      true
    } />
        <Bar ref='bar' dataset={this.state.dataset}/ >
        < /div>
    );
  }
}

export default Barchart;