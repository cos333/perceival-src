// http://bl.ocks.org/jonahwilliams/2f16643b999ada7b1909
// http://bl.ocks.org/natemiller/f2faa97c0bd4af49b5bb

import * as d3 from 'd3';
import React from 'react';
// import {errorBar} from './errorbar'

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: {
        'labels': ['18-24', '25-34', '35-44'],
        'stdevs': [3.0, 2.0, 14.0],
        'means': [35.3315, 17.2052, 25.6531]
      }
    }
  }

  componentDidMount() {
    this.createBars();
  }

  createBars() {
    var data = this.state.dataset;
    var length = Object.keys(data).length;
    var result = [];
    for (var i = 0; i < length; i++) {
      result.push(
          {label: data.labels[i], stdev: data.stdevs[i], mean: data.means[i]});
    }
    var margin = {top: 20, right: 20, bottom: 40, left: 40};
    var width = 400;
    var height = 600;


    var svg = d3.select(this.refs.bar)
                  .append('svg')
                  .attr('width', width)
                  .attr('height', height)
                  .attr('id', 'd3-bar')

                      var x = d3.scaleBand().domain(data.labels).rangeRound([0, width]).padding(0.1),
        y = d3.scaleLinear().rangeRound([height, 0]);

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


    var rect = g.selectAll('.bar')
                   .data(result)
                   .enter()
                   .append('rect')
                   .attr('class', 'bar')
                   .attr(
                       'x',
                       function(d) {
                         return x(d.label);
                       })
                   .attr(
                       'y',
                       function(d) {
                         return y(d.mean);
                       })
                   .attr('opacity', 0.5)
                   .attr('width', x.bandwidth())
                   .attr('height', function(d) {
                     return height - y(d.mean);
                   });
  }
  render() {
    return (<div ref='bar' className='d3-bar'>
    </div>);
  }
}

export default Bar;