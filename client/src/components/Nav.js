import React, { Component } from 'react';
import { Link } from 'react-router';
// import { login, logout, isLoggedIn } from '../utils/AuthService';
import './App.css';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Perceival </Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><button className="btn btn-primary log">Log In</button></li>
                    <li><button className="btn btn-danger log">Log out </button></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;