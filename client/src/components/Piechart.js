import './Chart.css';

import React, {Component} from 'react';

import DropdownOne from './DropdownOne';
import Pie from './Pie';

class Piechart extends Component {
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
    this.fetchData('numclicks', 'age');
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
    }
  }

  updateResponse(response) {
  }

  updateSegment(segment) {
    console.log('Update segment');
    this.fetchData(this.state.currentResponse, segment);
  }

  fetchData(response, segment) {
    var data = {'plot': 'pie', 'response': response, 'segment': segment};
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
            dataset: this.transformData(data),
            currentResponse: response,
            currentSegment: segment
          });
          this.refs.pie.updatePie();
        })
        .catch((err) => {
          console.log(err.message);
        });
  }

  transformData(data) {
    var length = data.labels.length;
    var dataset = [];
    for (var i = 0; i < length; i++) {
      var obj = {labels: data.labels[i], props: data.props[i]};
      dataset.push(obj)
    }
    return dataset;
  }

  render() {
    return (<div className = 'Chart'>
            <DropdownOne onClick =
             {
               (key) => this.handleClick(key)
             } segment =
             {
               this.state.segment
             } title = 'Pie Chart' />
            <Pie ref = 'pie' width = '500px' height = '500px' dataset = {
              this.state.dataset
            } / >
        </div>);
  }
}

export default Piechart;