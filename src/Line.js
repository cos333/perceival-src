// http://bl.ocks.org/bobmonteverde/2070123
//

import './Line.css';

import * as d3 from 'd3';
import React, { Component } from 'react';


class Line extends Component {
  constructor() {
    super();
    this.state = {
      dataset: [
        { 'Client': 'ABC', 'sale': '202', 'year': '2000' },
        { 'Client': 'ABC', 'sale': '215', 'year': '2002' },
        { 'Client': 'ABC', 'sale': '179', 'year': '2004' },
        { 'Client': 'ABC', 'sale': '199', 'year': '2006' },
        { 'Client': 'ABC', 'sale': '134', 'year': '2008' },
        { 'Client': 'ABC', 'sale': '176', 'year': '2010' },
      ]
    };
    this.createSvg = this.createSvg.bind(this);
  }

  componentDidMount() {
    this.createSvg();
  }

  createSvg() {
    var w = 500;
    var h = 300;
    var svg = d3.select(this.refs.line)
      .append('svg')
      .attr('width', w)
      .attr('height', h),
      margin = { top: 20, right: 80, bottom: 30, left: 50 },
      width = svg.attr('width') - margin.left - margin.right,
      height = svg.attr('height') - margin.top - margin.bottom,
      g = svg.append('g').attr(
        'transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var x = d3.scaleTime().range([0, width]),
      y = d3.scaleLinear().range([height, 0]),
      z = d3.scaleOrdinal(d3.schemeCategory10);

    var dataset = this.state.dataset;

    var sales = dataset.map(function (data) {
      return { time: +data.year, values: +data.sale };
    });

    x.domain(d3.extent(sales, function (d) {
      return d.time;
    }));
    x.domain([2000, 2010]);

    y.domain(d3.extent(sales, function (d) {
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
      .x(function (d) { return x(d.time); })
      .y(function (d) { return y(d.values); });

    var path = g.append("path")
      .datum(sales)
      .attr("class", "path")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);


    var totalLength = path.node().getTotalLength();

    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
        .duration(2000)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
  }

  render() {
    return (<div ref='line'></div>);
  }
}

export default Line;