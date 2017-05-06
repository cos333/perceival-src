import './Chart.css';

import React, { Component } from 'react';

import Dropdown from './Dropdown';
import Bars from './Bars';

class Errorchart extends Component {
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
      currentSegment: 'age'
    };

    this.updateResponse = this.updateResponse.bind(this);
    this.updateSegment = this.updateSegment.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  };

  handleClick(key) {
    console.log('handleClick Called. Key is ' + key);

    var responses = ['numclicks', 'centsspent', 'secondsspent'];
    var segments = ['age', 'country', 'gender', 'language'];

    if (responses.includes(key)) {
      this.updateResponse(key);
    }
    else if (segments.includes(key)) {
      this.updateSegment(key);
    }
    else {
      console.log("No such key");
    }
  }


  updateResponse(response) {
    console.log('updateResponse called');
    var obj = {
      method: 'GET',
      headers: { 'response': response, 'segment': this.state.currentSegment }
    };

    fetch(
      'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getMeanBarPlot', obj)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          currentResponse: response,
          url: data.url
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  updateSegment(segment) {
    console.log('updateSegment called');
    var obj = {
      method: 'GET',
      headers: { 'response': this.state.currentResponse, 'segment': segment }
    };

    fetch(
      'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getMeanBarPlot', obj)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          currentSegment: segment,
          url: data.url
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div className='Chart'>
        <Dropdown onClick={(key) =>
          this.handleClick(key)} response={
            this.state.response} segment={
            this.state.segment} />
        <Bars/>
      </div>
    );
  }
}

export default Errorchart;