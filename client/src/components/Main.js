import './Nav.css';

import React, { Component } from 'react';
import Nav from './Nav';
import Container from './Main/Container'
import Login from './Main/Login/Login'

class Main extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Container />
                <Login/>
            </div>
        );
    }
}

export default Main;
