import 'whatwg-fetch';
import React, { Component } from 'react';

class Pi extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    // this.getData();
  }



  getData() {
    return fetch('https://borac1eor6.execute-api.us-west-2.amazonaws.com/test/')
      .then((res) => {
        return res.json();
      })
      .then((pi) => {
        console.log(pi);
        this.setState({ data: pi });
      })
  }

  render() {
    return (<div className='Pi'>
    </div>);
  }
}

export default Pi;