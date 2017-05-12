import './Dropdown.css';
import React, { Component } from 'react';

function List(props) {
    return (
        <li><a className='dropdown-text' onClick={() => props.onClick(props.data)}>{props.data.name}</a></li>
    );
}

class Dropdown extends Component {
    renderResponse(i) {
        const response = this.props.response;
        return <List onClick={() => this.props.onClick(response[i].key)} data={response[i]} />
    }

    renderSegment(i) {
        const segment = this.props.segment;
        return <List onClick={() => this.props.onClick(segment[i].key)} data={segment[i]} />;
    }

    render() {
        if (this.props.hasSegment) {
            return (
                <div className='options'>
                    <div className='col-md-5'>
                        <h4>{this.props.title}</h4>
                    </div>
                    <div className="col-md-3">  
                        <div className='dropdown' id='response'>
                            <button className='btn btn-default btn-options dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
                                Response
                                &nbsp; <span className='caret'></span>
                            </button>

                            <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
                                {this.renderResponse(0)}
                                {this.renderResponse(1)}
                                {this.renderResponse(2)}
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className='dropdown' id='segment'>
                            <button className='btn btn-default btn-options dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
                                Segment
                                &nbsp; <span className='caret'></span>
                            </button>

                            <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
                                {this.renderSegment(0)}
                                {this.renderSegment(1)}
                                {this.renderSegment(2)}
                                {this.renderSegment(3)}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='options'>
                    <div className='col-md-5'>
                        <h4>{this.props.title}</h4>
                    </div>
                    <div className="col-md-3">  
                        <div className='dropdown' id='response'>
                            <button className='btn btn-default btn-options dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
                                Response
                                &nbsp; <span className='caret'></span>
                            </button>

                            <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
                                {this.renderResponse(0)}
                                {this.renderResponse(1)}
                                {this.renderResponse(2)}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Dropdown;