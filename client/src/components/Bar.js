// http://bl.ocks.org/jonahwilliams/2f16643b999ada7b1909
// http://bl.ocks.org/natemiller/f2faa97c0bd4af49b5bb

import * as d3 from 'd3';
import React from 'react';

class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.createBars();
  }

  createBars() {
    var data = this.props.dataset;
    var length = Object.keys(data).length;
    var result = [];
    for (var i = 0; i < length; i++) {
      result.push(
          {label: data.labels[i], stdev: data.stdevs[i], mean: data.means[i]});
    }

    var margin = {top: 20, right: 20, bottom: 40, left: 40};
    var width = 500;
    var height = 500;
    var svg = d3.select(this.refs.bar) 
                  .append('svg') 
                  .attr('width', width) 
                  .attr('height', height) 
                  .attr('id', 'd3-bar'); 
// With Grid    
    // var svg = d3.select(this.refs.bar)
    //     .append("div")
    //     .classed("svg-container", true) //container class to make it responsive
    //     .append("svg")
    //     //responsive SVG needs these 2 attributes and no width and height attr
    //     .attr("preserveAspectRatio", "xMinYMin meet")
    //     .attr("viewBox", "0 0 400 330")
    //     //class to make it responsive
    //     .classed("svg-content-responsive", true)
    //     .attr('id', 'd3-bar');

    var x =
        d3.scaleBand().domain(data.labels).rangeRound([0, width]).padding(0.1);
    var y = d3.scaleLinear().rangeRound([height, 0]);

    var g = svg.append('g').attr(
        'transform', 'translate(' + margin.left + ',' + margin.top + ')');

    x.domain(data.labels.map(function(d) {
      return d;
    }));
    y.domain([
      0,
      d3.max(
          data.means,
          function(d) {
            return d;
          })
    ]);

    g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y).ticks(10))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Frequency');

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var rect = g.selectAll('rect')
                   .data(result)
                   .enter()
                   .append('rect')
                   .attr('class', 'bar')
                   .attr(
                       'x',
                       function(d) {
                         return x(d.label);
                       })
                   .attr('y', height)
                   .transition()
                   .delay(1500)
                   .duration(800)
                   .attr(
                       'y',
                       function(d) {
                         return y(d.mean);
                       })
                   .attr('width', x.bandwidth())
                   .attr(
                       'height',
                       function(d) {
                         return height - y(d.mean);
                       })
                   .attr('fill', function(d, i) {
                     return color(i);
                   });
  }

  updateBar() {
    var bars = d3.select('#d3-bar');
    bars.remove();
    var data = this.props.dataset;
    var length = Object.keys(data).length;
    var result = [];
    for (var i = 0; i < length; i++) {
      result.push(
          {label: data.labels[i], stdev: data.stdevs[i], mean: data.means[i]});
    }

    var margin = {top: 20, right: 20, bottom: 40, left: 40};
    var width = 400;
    var height = 600;

    console.log('data', data);

    var svg = d3.select(this.refs.bar)
        .append("div")
        .classed("svg-container", true) //container class to make it responsive
        .append("svg")
        //responsive SVG needs these 2 attributes and no width and height attr
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 400 330")
        //class to make it responsive
        .classed("svg-content-responsive", true)
        .attr('id', 'd3-bar');

    var x =
        d3.scaleBand().domain(data.labels).rangeRound([0, width]).padding(0.1);
    var y = d3.scaleLinear().rangeRound([height, 0]);

    var g = svg.append('g').attr(
        'transform', 'translate(' + margin.left + ',' + margin.top + ')');

    x.domain(data.labels.map(function(d) {
      return d;
    }));
    y.domain([
      0,
      d3.max(
          data.means,
          function(d) {
            return d;
          })
    ]);

    g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
        .call(d3.axisBottom(x));

    g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y).ticks(10))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Frequency');

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var rect = g.selectAll('rect')
                   .data(result)
                   .enter()
                   .append('rect')
                   .attr('class', 'bar')
                   .attr(
                       'x',
                       function(d) {
                         return x(d.label);
                       })
                   .attr('y', height)
                   .transition()
                   .delay(1000)
                   .duration(1000)
                   .attr(
                       'y',
                       function(d) {
                         return y(d.mean);
                       })
                   .attr('width', x.bandwidth())
                   .attr(
                       'height',
                       function(d) {
                         return height - y(d.mean);
                       })
                   .attr('fill', function(d, i) {
                     return color(i);
                   });
  }
  render() {
    return (<div ref='bar' className='d3-bar'>
    </div>);
  }
}

export default Bar;