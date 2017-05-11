import './Chart.css';

import React, {Component} from 'react';

import Bar from './Bar';
import DropdownTwo from './Dropdown';

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
    var data = {'plot': 'bar', 'response': response, 'segment': segment};
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
            currentSegment: segment
          });
          this.refs.bar.createBars();
        })
        .catch((err) => {
          console.log(err.message);
        });
  }

  render() {
    return (<div className = 'Chart'>
            <DropdownTwo onClick =
             {
               (key) => this.handleClick(key)
             } response =
             {
               this.state.response
             } segment =
             {
               this.state.segment
             } hasSegment =
             {
               true
             } title = 'Bar Plot' />
            <Bar ref = 'bar' width = '500px' height = '500px' dataset = {
              this.state.dataset
            } />
      </div>);
  }
}

export default Barchart;