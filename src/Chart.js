import './Chart.css';

import React, {Component} from 'react';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {response: 'CentsSpent', segment: 'Gender'};

    this.updateResponse = this.updateResponse.bind(this);
    this.updateSegment = this.updateSegment.bind(this);
  }

  updateResponse(response) {
    console.log('updateResponse Called');

    const header = {
      method: 'GET',
      headers: {'response': response, 'segment': this.state.segment}
    };

    fetch(
        'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getMeanBarPlot',
        header)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('Data:');
          console.log(data);
          this.setState({response: response});
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
        <div className='dropdown' id='response'>
          <button className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>Response
    <span className='caret'></span>
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
            <li><a onClick={this.updateResponse}>Number of Clicks</a></li>
            <li><a onClick={this.updateResponse}>Cents Spent</a></li>
            <li><a onClick={this.updateResponse}>Seconds Spent</a></li>
          </ul> 
        </div>
        <div className='dropdown' id='segment'>
          <button className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>Segment
    <span className='caret'></span>
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
            <li><a onClick={this.updateResponse}>Age</a></li>
            <li><a onClick={this.updateResponse}>Country</a></li>
            <li><a onClick={this.updateResponse}>Gender</a></li>
            <li><a onClick={this.updateResponse}>Language</a></li>              
          </ul> 
          </div>
        </div>  
        {/*<i className='fa fa-bar-chart' aria-hidden='true'></i>
        <i className="fa fa-pie-chart" aria-hidden="true"></i>
        <i className='fa fa-line-chart' aria-hidden='true'></i>*/}
        <div className='Chart-header'>
          <iframe width='100%' height='500' frameBorder='0' scrolling='no'
            src='https://s3-us-west-2.amazonaws.com/perceival-html-plots/default/barplot-CentsSpent-vs-gender.html'></iframe>
        </div>
        <p className='Chart-intro'>
        </p>
      </div>
    );
}
}

export default Chart;