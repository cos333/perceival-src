/* eslint-disable */
import './Register.css'
import React, { Component } from 'react';
import {
    Button, Modal, Form, FormGroup, ControlLabel, FormControl, Checkbox, Col
} from 'react-bootstrap';

class Register extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { showModal: false,
            profile: props.auth.getProfile() }
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (<div>
            <Button onClick={this.open} id='register-button'>Register App
            </Button>
            <Modal show={this.state.showModal} onHide={this.close}>
                <div className="registration-wrapper">
                    <div className="pull-right close-button"> 
                        <Button bsStyle="danger" onClick={this.close}>X</Button>
                    </div>

                    <div className="registration-form">
                        <h2 className="text-semibold">Register Application</h2>
                        <br/>

                        <p>Hello {this.state.profile.given_name}! Please fill out the following information to register your application.</p>

                        <Form method="POST" action="http://formspree.io/jisung.cos333@gmail.com">
                            <FormGroup>
                                <FormControl type="text" bsSize="small" name="app-name" placeholder="Name of your app" />
                            </FormGroup>
                            <FormGroup>
                                <FormControl type="text" bsSize="small" name="app-description" placeholder="Please describe your app in < 30 words." />
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit">Submit</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </Modal>
        </div>);
    }
}

export default Register;