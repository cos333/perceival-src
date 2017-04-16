import 'whatwg-fetch';
import React, {Component} from 'react';

class Pi extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.getData = this.getData.bind(this);
  } 
  componentDidMount() {
    this.getData();
  }

  getData() {
    return fetch('https://borac1eor6.execute-api.us-west-2.amazonaws.com/test/')
      .then((res) => {
        return res.json();
      })
      .then((pi) => {
        console.log(pi);
        this.setState({
          data: pi
        });
      })
  }   

  render() {
    return (
      <div className='Pi'>
            <button type='button' className='btn btn-info' onClick={
        this.getData}>Get Pi</button>
      {/*<p>The value of pi is: {JSON.stringify(this.state.data)}</p>*/}
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