import './Chart.css';

import React, {Component} from 'react';

import DropdownOne from './DropdownOne';
import Pie from './Pie';


function prettifySegment(x) {
  if (x === 'age') {
    var latterText = 'age (years)'
  } else if (x === 'country') {
    var latterText = 'country'
  } else if (x === 'gender') {
    var latterText = 'gender'
  } else if (x === 'language') {
    var latterText = 'language'
  } else {
    var latterText = 'unknown segment: (' + x + ')';
  }

  return 'Breakdown of user ' + latterText;
}

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
    }
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
          this.refs.pie.createPie();
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
            <h4 className='text-center text-semibold plot-title'>
              {prettifySegment(this.state.currentSegment)}
            </h4>

            <div className='pie'>
              <Pie ref = 'pie' width = '500px' height = '500px' dataset = {
                this.state.dataset
              } / >
            </div>
        </div>);
  }
}

export default Piechart;