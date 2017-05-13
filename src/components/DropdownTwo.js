import React, { Component } from 'react';
import './Dropdown.css';

function List(props) {

    return (
        <li><a onClick={() => props.onClick(props.data)}>{props.data.name}</a></li>
    );
}

class Dropdown_two extends Component {
    
    renderResponse(i) {
        const response = this.props.response;
        return <List onClick={() => this.props.onClick(response[i].key)} data={response[i]} />;
    }

    renderSegment(i) {
        const segment = this.props.segment;
        return <List onClick={() => this.props.onClick(segment[i].key)} data={segment[i]} />;
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
                    </ul>
                </div>
            </div>
        );
    }
}

export default Dropdown_two;