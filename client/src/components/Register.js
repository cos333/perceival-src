import './Register.css'
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

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
                    <h4>Form to be filled out</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>);
    }
}

export default Register;