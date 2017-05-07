import './Chart.css';

import React, {Component} from 'react';

import Dropdown from './Dropdown';
import Line from './Line';

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
      url: '',
      currentResponse: 'numclicks',
      currentSegment: 'age',
      dataset: [
        {'Client': 'ABC', 'sale': '202', 'year': '2000'},
        {'Client': 'ABC', 'sale': '215', 'year': '2002'},
        {'Client': 'ABC', 'sale': '179', 'year': '2004'},
        {'Client': 'ABC', 'sale': '199', 'year': '2006'},
        {'Client': 'ABC', 'sale': '134', 'year': '2008'},
        {'Client': 'ABC', 'sale': '176', 'year': '2010'},
      ]
    };

    this.updateResponse = this.updateResponse.bind(this);
    this.updateSegment = this.updateSegment.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
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
            {'Client': 'ABC', 'sale': '300', 'year': '2000'},
            {'Client': 'ABC', 'sale': '400', 'year': '2002'},
            {'Client': 'ABC', 'sale': '500', 'year': '2004'},
            {'Client': 'ABC', 'sale': '400', 'year': '2006'},
            {'Client': 'ABC', 'sale': '300', 'year': '2008'},
            {'Client': 'ABC', 'sale': '200', 'year': '2010'},
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
      headers: {'response': this.state.currentResponse, 'segment': segment}
    };

    fetch(
        'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getMeanBarPlot',
        obj)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.setState({currentSegment: segment, url: data.url});
        })
        .catch((err) => {
          console.log(err.message);
        });
  }

  render() {
    return (
      <div className='Chart'>
        <Dropdown onClick={
      (key) => this.handleClick(key)} response={
      this.state.response} segment={
      this.state.segment} />
        <Line ref="line" dataset={this.state.dataset} />
      </div>
    );
  }
}

export default Linechart;