import './Chart.css';

import React, { Component } from 'react';

import Pie from './Pie';
import Dropdown from './Dropdown';

class Piechart extends Component {
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
          labels: '18-24',
          props: 0.298,
        },
        {
          labels: '25-34',
          props: 0.568,
        },
        {
          labels: '35-44',
          props: 0.134,
        }
      ]
    };

    this.updateResponse = this.updateResponse.bind(this);
    this.updateSegment = this.updateSegment.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(
      'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getPlotData')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ url: data.url });
      });
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
    var newData = [
      {
        labels: '18-24',
        props: 0.800,
      },
      {
        labels: '25-34',
        props: 0.050,
      },
      {
        labels: '35-44',
        props: 0.150,
      }
    ];
    console.log('updateResponse called');
    this.setState({
      currentResponse: response,
      dataset: newData
    }, () => { this.refs.pie.updatePie(); });


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
    this.setState({
      currentSegment: segment
    }, () => { console.log(this.state); });


    // var obj = {
    //   method: 'GET',
    //   headers: { 'response': this.state.currentResponse, 'segment': segment }
    // };

    // fetch(
    //   'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getMeanBarPlot', obj)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     this.setState({
    //       currentSegment: segment,
    //       url: data.url
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  }

  render() {
    return (
      <div className='Chart'>
        <Dropdown onClick={(key) =>
          this.handleClick(key)} response={
            this.state.response} segment={
              this.state.segment} 
          title='Pie Chart'/>
        <Pie ref="pie" width="300px" height="300px" dataset={this.state.dataset} />
      </div>
    );
  }
}

export default Piechart;