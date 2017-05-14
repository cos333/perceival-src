import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import './styles.module.css'

import Typist from 'react-typist'
import Particles from 'react-particles-js';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.render = this.render.bind(this);

  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { auth } = this.props;

    var nParticles = Math.max(50, Math.round(this.state.width * 0.1));

    return (
      <div className="root">
          <div className="col-md-12 login">
            <div className="above-particles"> 
              <h1>
                <Typist avgTypingDelay={80} cursor={{hideWhenDone: true, hideWhenDoneDelay: 120}}>
                  Hi! I'm <span className="purple text-semibold">Percy</span>
                </Typist>
              </h1>
              <h4>Please login to your acccount</h4>
              <ButtonToolbar className="login-toolbar">
                <Button bsStyle="primary" onClick={auth.login.bind(this)}>Authenticate</Button>
              </ButtonToolbar>
            </div>

            <div className="particles">
              <Particles 
                width={0.77 * this.state.width}
                height={0.77 * this.state.height}
                params={
                  {particles: {
                  number: {value: nParticles}, color: {value: "#9013FE"}, size: {value: 3}, 
                  opacity: {value: 0.2}, line_linked: {color: "#9013FE", width: 1.2, opacity: 0.1}
                }}}
              />
          </div>
          </div>
      </div>
    )
  }
}

export default Login;
