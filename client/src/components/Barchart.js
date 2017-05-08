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
    var newData = {
      'labels': ['18-24', '25-34', '35-44'],
      'stdevs': [3.0, 2.0, 14.0],
      'means': [35.3315, 50.2052, 40.6531]
    };

    console.log('updateResponse called');
    this.setState({currentResponse: response, dataset: newData}, () => {
      this.refs.bar.updateBar();
    });
    // var obj = {
    //   method: 'GET',
    //   headers: {'response': response, 'segment': this.state.currentSegment}
    // };

    // fetch(
    //     'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getMeanBarPlot',
    //     obj)
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       this.setState({currentResponse: response, url: data.url});
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //     });
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
      this.state.segment}
        title='Bar Plot'
        hasSegment={true}
        />
        <Bar ref='bar' width="500px" height="500px" dataset={this.state.dataset}/>
      </div>
    );
  }
}

export default Barchart;