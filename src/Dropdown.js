import React, { Component } from 'react';
import './Dropdown.css';

function List(props) {

    return (
        <li><a onClick={() => props.onClick(props.data)}>{props.data.name}</a></li>
    )
}

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { response: 'centsspent', segment: 'gender' };

        this.updateResponse = this.updateResponse.bind(this);
        this.updateSegment = this.updateSegment.bind(this);
    }

    renderResponse(i) {
        const response = this.props.response;
        return <List onClick={() => this.props.onClick(response[i].key)} data={response[i]} />;
    }

    renderSegment(i) {
        const segment = this.props.segment;
        return <List onClick={() => this.props.onClick(segment[i].key)} data={segment[i]} />;
    }

    updateResponse(response) {
        console.log('updateResponse Called');

        const header = {
            method: 'GET',
            headers: { 'response': response, 'segment': this.state.segment }
        };

        fetch(
            'https://6o688hd6c7.execute-api.us-west-2.amazonaws.com/prod/getMeanBarPlot',
            header)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log('Data:');
                console.log(data);
                this.setState({ response: response });
            });
    }

    updateSegment(segment) {
        console.log('updateSegment Called');

        const header = {
            method: 'GET',
            headers: { 'response': this.state.response, 'segment': segment }
        };

        fetch(
            'https://1jy0hfu5ai.execute-api.us-west-2.amazonaws.com/prod/printEvent',
            header)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log('Data:');
                console.log(data);
                this.setState({ segment: segment });
            });
    }

    render() {
        return (
            <div>
                <div className='dropdown' id='response'>
                    <button className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>Response
    <span className='caret'></span>
                    </button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
                        {this.renderResponse(0)}
                        {this.renderResponse(1)}
                        {this.renderResponse(2)}
                    </ul>
                </div>
                <div className='dropdown' id='segment'>
                    <button className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>Segment
    <span className='caret'></span>
                    </button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
                        {this.renderSegment(0)}
                        {this.renderSegment(1)}
                        {this.renderSegment(2)}
                        {this.renderSegment(3)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Dropdown;