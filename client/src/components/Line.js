// http://bl.ocks.org/bobmonteverde/2070123
// https://code.tutsplus.com/tutorials/building-a-multi-line-chart-using-d3js-part-2--cms-22973
import './Line.css';

import * as d3 from 'd3';
import React, {Component} from 'react';

  export function prettifyYAxis(y) {
    let latterText;
    if (y === 'numclicks') {
      latterText = 'Number of clicks'
    } else if (y === 'centsspent') {
      latterText = 'Cents Spent'
    } else if (y === 'secondsspent') {
      latterText = 'Seconds Spent'
    } else {
      latterText = 'unknown response: (' + y + ')';
    }
    return latterText
  }

  export function prettifyXAxis(x) {
    let latterText;
    if (x === 'age') {
      latterText = 'Age'
    } else if (x === 'country') {
      latterText = 'Country'
    } else if (x === 'gender') {
      latterText = 'Gender'
    } else if (x === 'language') {
      latterText = 'Language'
    } else {
      latterText = 'unknown response: (' + x + ')';
    }
    return latterText
  }

class Line extends Component {
  constructor() {
    super();
    this.createLines = this.createLines.bind(this);
  }

  componentDidMount() { 
    window.addEventListener('resize', this.handleResize); 
  } 

  componentWillUnmount() { 
    window.removeEventListener('resize', this.handleResize); 
  } 

  handleResize = () => { 
    this.createLines(); 
  } 

  createLines() {
    var lines = d3.select('#d3-line');
    lines.remove();
    var w = document.getElementById('Linechart').offsetWidth;
    var h = 350;
    var svg = d3.select(this.refs.line)
                  .append('svg')
                  .attr('width', w)
                  .attr('height', h)
                  .attr('id', 'd3-line'),
        margin = {top: 20, right: 50, bottom: 50, left: 60},
        width = w - margin.left - margin.right,
        height = h - margin.top - margin.bottom,
        g = svg.append('g').attr(
            'transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var x = d3.scaleTime().range([0, width]),
        y = d3.scaleLinear().range([height, 0]),
        z = d3.scaleOrdinal(d3.schemeCategory10);
    var parseTime = d3.timeParse('%Y-%m-%d');

    var dataset = this.props.dataset;
    var yOne = dataset[0].y;
    var yTwo = dataset[1].y;
    let yArray;

    if (dataset.length == 3) {
      var yThree = dataset[2].y;
      yArray = yOne.concat(yTwo).concat(yThree);
    } 
    else {
      yArray = yOne.concat(yTwo);
    }

    var xArray = dataset[0].x.map(function(d) {
      return parseTime(d)
    });

    var users = dataset.map(function (data) {
      var label = data.label;
      var length = data.x.length;
      var arr = [];
      for (var i = 0; i < length; i++) {
        var obj = {x: parseTime(data.x[i]), y: data.y[i]};
        arr.push(obj);
      }
      return {
        label: label, values: arr
      }

    });

    x.domain([d3.min(xArray), d3.max(xArray)]);
    y.domain([d3.min(yArray), d3.max(yArray)]);
    z.domain(users.map(function(u) {
      return u.id;
    }));

    g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    // add y axis label
    var yAxisLabel = prettifyYAxis(this.props.response);
    g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', -40)
        .attr('dy', '0.71em')
        .attr('fill', '#000')
        .text(yAxisLabel);

    // add x axis label
    var xAxisLabel = prettifyXAxis(this.props.segment);
    svg.append("text")
        .attr('class', 'axis axis--x')
        .attr("transform", "translate(" + (w / 2) + " ," + (h - margin.bottom/3) + ")")
        .style("text-anchor", "middle")
        .text(xAxisLabel);

    var line = d3.line()
                   .curve(d3.curveBasis)
                   .x(function(d) {
                     return x(d.x);
                   })
                   .y(function(d) {
                     return y(d.y);
                   });

    var user = g.selectAll('.user').data(users).enter().append('g').attr(
        'class', 'user');

    var linesChart = user.append('path')
                    .attr('class', 'line')
                    .attr(
                        'd',
                        function(d) {
                          return line(d.values);
                        })
                    .style('stroke', function(d) {
                      return z(d.label);
                    });
    var totalLength = linesChart.node().getTotalLength();

    linesChart.attr('stroke-dasharray', totalLength + ' ' + totalLength)
        .attr('stroke-dashoffset', totalLength)
        .transition()
        .duration(1000)
        .ease(d3.easeLinear)
        .attr('stroke-dashoffset', 0);
  }

  render() {
    return (<div ref='line'></div>);
  }
}

export default Line;