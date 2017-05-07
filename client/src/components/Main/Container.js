import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'

import Home from './Home/Home'
import Login from './Login/Login'
import styles from './styles.module.css'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
      <div className='col-md-6'>
        <div className='card'>
          <div className='content'>
            <Jumbotron>
              <h2 className={styles.mainTitle}>
                <img src='https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg' />
              </h2>
              {children}
            </Jumbotron>
          </div>
        </div>
      </div>
    )
  }
}

export default Container;
