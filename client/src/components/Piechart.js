import './Chart.css';

import React, {Component} from 'react';

import DropdownSingle from './DropdownSingle';
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
    var opts = {'plot': 'bar', 'response': 'SecondsSpent', 'segment': 'age'};
    var url =
        'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getPlotData';
    fetch(url, {method: 'post', body: JSON.stringify(opts)})
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          this.setState({url: data.url});
        });
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
    var newData = [
      {
        labels: 'female',
        props: 0.732,
      },
      {
        labels: 'male',
        props: 0.268,
      }
    ];
    console.log('updateResponse called');
    this.setState({currentResponse: response, dataset: newData}, () => {
      this.refs.pie.updatePie();
    });


    var obj = {
      method: 'GET',
      headers: {'response': response, 'segment': this.state.currentSegment}
    };
  }

  updateSegment(segment) {
    console.log('updateSegment called');
    var newData;
    var age = [
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
    ];

    var gender = [
      {
        labels: 'female',
        props: 0.732,
      },
      {
        labels: 'male',
        props: 0.268,
      }
    ];

    var country = [
      {
        labels: 'brazil',
        props: 0.684,
      },
      {
        labels: 'canada',
        props: 0.316,
      }
    ];

    var language = [
      {
        labels: 'en-us',
        props: 0.56,
      },
      {
        labels: 'pt-br',
        props: 0.44,
      }
    ];
    switch (segment) {
      case 'age':
        newData = age;
        break;
      case 'gender':
        newData = gender;
        break;
      case 'country':
        newData = country;
        break;
      case 'language':
        newData = language;
        break;
    }
    this.setState({currentSegment: segment, dataset: newData}, () => {
      this.refs.pie.updatePie();
    });
  }

  render() {
    return (<div className = 'Chart'>
            <DropdownSingle onClick =
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