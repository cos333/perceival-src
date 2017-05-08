import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../../../utils/AuthService'
import './styles.module.css'

import Typist from 'react-typist'
import Particles from 'react-particles-js';

export class Login extends React.Component {
  render() {
    const { auth } = this.props

    return (
      <div className="root">
          <div className="col-md-12 login">
            <div className="above-particles"> 
              <h1 className="text-semibold">
                <Typist avgTypingSpeed={90} cursor={{hideWhenDone: true, hideWhenDoneDelay: 120}}>
                  Hi! I'm Percy.
                </Typist>
              </h1>
              <h4>Please login to your acccount</h4>
              <ButtonToolbar className="login-toolbar">
                <Button bsStyle="primary" onClick={auth.login.bind(this)}>Authenticate</Button>
              </ButtonToolbar>
            </div>

            <div>
              <div className="particles">
                <Particles params={{particles: {
                    number: {value: 100}, color: {value: "#9013FE"}, size: {value: 3}, 
                    opacity: {value: 0.2}, line_linked: {color: "#9013FE", width: 1.2, opacity: 0.2}
                  }}}
                />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Login;
