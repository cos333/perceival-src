import './Chart.css';

import React, {Component} from 'react';

import Dropdown from './Dropdown';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [
        {name: 'Number of Clicks', key: 'clicks'},
        {name: 'Cents Spent', key: 'cents'},
        {name: 'Seconds Spent', key: 'seconds'}
      ],
      segment: [
        {name: 'Age', key: 'age'}, {name: 'Country', key: 'country'},
        {name: 'Gender', key: 'gender'}, {name: 'Language', key: 'language'}
      ],
      url: '',
      currentResponse: 'clicks',
      currentSegment: 'age'
    };

    this.updateResponse = this.updateResponse.bind(this);
    this.updateSegment = this.updateSegment.bind(this);
  }

  // componentDidMount() {
  //   fetch(
  //       'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getMeanBarPlot')
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         this.setState({url: data.url});
  //       });
  // };

  handleClick(key) {
    console.log(key);
  }

  updateResponse(response) {
    console.log('updateResponse Called');

    const headers = new Headers({
      method: 'GET',
      headers: {'response': 'NumClicks', 'segment': this.state.segment}
    });

    fetch(
        'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getMeanBarPlot', headers)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.setState({
            response: response,
          url: data.url});
        });
  }

  updateSegment(segment) {
    console.log('updateSegment Called');

    const header = {
      method: 'GET',
      headers: {'response': this.state.response, 'segment': segment}
    };

    fetch(
        'https://1jy0hfu5ai.execute-api.us-west-2.amazonaws.com/prod/printEvent',
        header)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('Data:');
          console.log(data);
          this.setState({segment: segment});
        });
  }

  render() {
    return (
      <div className='Chart'>
        <div>
          <Dropdown onClick={(key) =>
      this.updateResponse(key)} response={
      this.state.response} segment={
      this.state.segment} />
        </div>  
        <div className='Chart-header'>
          <iframe width='100%' height='500' frameBorder='0' scrolling='no'
            src={this.state.url}></iframe>
        </div>
        <p className='Chart-intro'>
        </p>
      </div>
    );
  }
}

export default Chart;