/* eslint-disable */
import './Register.css'
import React, { Component } from 'react';
import {
    Button, Modal, Form, FormGroup, ControlLabel, FormControl, Checkbox, Col
} from 'react-bootstrap';

class Register extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { showModal: false }
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
            <Button onClick={this.open}
                id='register-button'>Register App</Button>
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form method="POST" action="http://formspree.io/sheon.han@gmail.com">
                        <FormGroup controlId="formHorizontalEmail">
                            <Col sm={10}>
                                <FormControl type="email" placeholder="Your email" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword">
                            <Col sm={10}>
                                <FormControl type="message" placeholder="Your message" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>);
    }
}

export default Register;