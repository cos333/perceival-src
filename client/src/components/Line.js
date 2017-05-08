// http://bl.ocks.org/bobmonteverde/2070123
// https://code.tutsplus.com/tutorials/building-a-multi-line-chart-using-d3js-part-2--cms-22973
import './Line.css';
import './Resize.css';

import * as d3 from 'd3';
import React, {Component} from 'react';


class Line extends Component {
  constructor() {
    super();
    this.createLine = this.createLine.bind(this);
  }

  componentDidMount() {
    this.createLine();
  }

  createLine() {
    var w = 500;
    var h = 300;
    var svg = d3.select(this.refs.line)
                  .append('div')
                  .classed(
                      'svg-container',
                      true)  // container class to make it responsive
                  .append('svg')
                  // responsive SVG needs these 2 attributes and no width and
                  // height attr
                  .attr('preserveAspectRatio', 'xMinYMin meet')
                  .attr('viewBox', '0 0 400 330')
                  // class to make it responsive
                  .classed('svg-content-responsive', true)
                  .attr('id', 'd3-line'),
        margin = {top: 20, right: 80, bottom: 30, left: 50},
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
    var yThree = dataset[2].y;

    var yArray = yOne.concat(yTwo).concat(yThree);
    var xArray = dataset[0].x.map(function(d) {
      return parseTime(d)
    });

    var users = dataset.map(function(data) {
      var label = data.label;
      var length = data.x.length;
      var arr = [];
      for (var i = 0; i < length; i++) {
        var obj = {x: parseTime(data.x[i]), y: data.y[i]};
        arr.push(obj);
      }
      return {
        label: data.label, values: arr
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

    g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('fill', '#000')
        .text('Sales, $');

    var line = d3.line()
                   .curve(d3.curveBasis)
                   .x(function(d) {
                     return x(d.x);
                   })
                   .y(function(d) {
                     return y(d.y);
                   });

    var user = g.selectAll('.user')
      .data(users)
      .enter()
      .append('g')
      .attr('class', 'user');
    
    var lines = user.append('path')
                   .attr('class', 'line')
                   .attr(
                       'd',
                       function(d) {
                         return line(d.values);
                       })
                   .style('stroke', function(d) {
                     return z(d.label);
                   });
    var totalLength = lines.node().getTotalLength();

    lines.attr('stroke-dasharray', totalLength + ' ' + totalLength)
        .attr('stroke-dashoffset', totalLength)
        .transition()
        .delay(1500)
        .duration(1000)
        .ease(d3.easeLinear)
      .attr('stroke-dashoffset', 0);
    
  // user.append("text")
  //     .datum(function(d) { return {label: d.label, value: d.values[d.values.length - 1]}; })
  //     .attr("transform", function(d) { return "translate(" + x(d.value.x) /2 + "," + y(d.value.y) /2 + ")"; })
  //     .attr("x", 3)
  //     .attr("dy", "0.35em")
  //     .style("font", "10px sans-serif")
  //     .text(function(d) { return d.label; });
  }

  updateLine() {
    var lines = d3.select('#d3-line');
    lines.remove();
    var dataset = this.props.dataset;
    var w = 500;
    var h = 300;
    var svg = d3.select(this.refs.line)
                  .append('div')
                  .classed(
                      'svg-container',
                      true)  // container class to make it responsive
                  .append('svg')
                  // responsive SVG needs these 2 attributes and no width and
                  // height attr
                  .attr('preserveAspectRatio', 'xMinYMin meet')
                  .attr('viewBox', '0 0 400 330')
                  // class to make it responsive
                  .classed('svg-content-responsive', true)
                  .attr('class', 'linechart'),
        margin = {top: 20, right: 80, bottom: 30, left: 50},
        width = w - margin.left - margin.right,
        height = h - margin.top - margin.bottom,
        g = svg.append('g').attr(
            'transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var x = d3.scaleTime().range([0, width]),
        y = d3.scaleLinear().range([height, 0]);

    dataset = this.props.dataset;
    console.log('dataset', dataset);

    var sales = dataset.map(function(data) {
      return {time: +data.year, values: +data.sale};
    });

    x.domain(d3.extent(sales, function(d) {
      return d.time;
    }));
    x.domain([2000, 2010]);

    y.domain(d3.extent(sales, function(d) {
      return d.values;
    }));

    g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('fill', '#000')
        .text('Sales, $');

    var line = d3.line()
                   .curve(d3.curveBasis)
                   .x(function(d) {
                     return x(d.time);
                   })
                   .y(function(d) {
                     return y(d.values);
                   });

    var path = g.append('path')
                   .datum(sales)
                   .attr('class', 'path')
                   .attr('fill', 'none')
                   .attr('stroke', 'steelblue')
                   .attr('stroke-linejoin', 'round')
                   .attr('stroke-linecap', 'round')
                   .attr('stroke-width', 1.5)
                   .attr('d', line);


    var totalLength = path.node().getTotalLength();

    path.attr('stroke-dasharray', totalLength + ' ' + totalLength)
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