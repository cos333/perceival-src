import React, { Component } from 'react';
import axios from 'axios';

class Pi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get(`https://borac1eor6.execute-api.us-west-2.amazonaws.com/test/`)
      .then(function(res) {
        const data = res.data.data.
        console.log(res);
      });
  }      

  render() {
    return (
      <div className="Pi">
        <div className="Pi-header">
          <iframe width="100%" height="500" frameBorder="0" scrolling="no"></iframe>
        </div>
        <p className="Pi-intro">
          {/*{this.state.data.map()}*/}
        </p>
      </div>
    );
  }
}

  /*render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}*/


export default Pi;