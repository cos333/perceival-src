// import Dropdown from './Dropdown';

import './Pie.css';
import './Resize.css';

import * as d3 from 'd3';
import React, {Component} from 'react';

class Pie extends Component {
  constructor() {
    super();
    this.updatePie = this.updatePie.bind(this);
  }


  componentDidMount() {
    var arcs = this.createArcs();
    this.createPie(arcs);
    // this.setText(arcs);
  }

  componentDidUpdate() {
    // this.updatePie();
  }

  createArcs() {
<<<<<<< HEAD
    var w = this.props.width;
    var h = this.props.height;

    var outerRadius = 150;
=======
    var w = 500;
    var h = 500;
>>>>>>> 481ca8253ab5fc0aad3625c52621566a3fd0a150
    return d3.select(this.refs.pie)
        .append('svg')
        .attr('width', w)
        .attr('height', h)
        .attr('id', 'd3-pie')
        .append('g')
        .attr('class', 'arc')
        .attr(
            'transform', 'translate(' + outerRadius + ', ' + outerRadius + ')')
        .append('g')
        .attr('class', 'label');
  }

  createPie(arcs) {
    var pie = d3.pie().value(function(d) {
      return d.props;
    });
    var dataset = this.props.dataset;
    var outerRadius = 150;
    var arc = d3.arc().innerRadius(0).outerRadius(150);
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    arcs.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .transition()
        .delay(1500)
        .duration(800)
        .attr(
            'fill',
            function(d, i) {
              return color(i)
            })
        .attr('d', arc)
        .attrTween(
            'd',
            function(d) {
              var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
              return function(t) {
                d.endAngle = i(t);
                return arc(d);
              }
            })
        .each(function(d) {
          this._current = d;
        });

    arcs.selectAll('text')
        .data(pie(dataset))
        .enter()
        .append('text')
        .attr(
            'transform',
            function(d) {  // set the label's origin to the center of the arc
              // we have to make sure to set these before calling arc.centroid
              d.outerRadius = outerRadius;      // Set Outer Coordinate
              d.innerRadius = outerRadius - 5;  // Set Inner Coordinate
              return 'translate(' + arc.centroid(d) + ')';
            })
        .attr('text-anchor', 'middle')  // center the text on it's origin
        .style('fill', 'White')
        .style('font', 'bold 12px Arial')
        .text(function(d, i) {
          return d.data.labels;
        });
  }

  // setText(arcs) {
  //     var svg = d3.select('svg');
  //     var arc = d3.arc()
  //         .innerRadius(0)
  //         .outerRadius(150);
  //     var dataset = this.state.dataset;
  //     var pie = d3.pie().value(function (d) {
  //         return d.props;
  //     });

  //     var text = svg.select('.label').selectAll("text")
  //         .data(pie(dataset), function (d) {
  //             return d.data.label;
  //         })
  //     text.enter()
  //         .append('text')
  //         .attr("dy", ".35em")
  //         .text("")
  //     // .text(function (d) {
  //     //     return (d.data.label);
  //     // });
  // }

  updatePie() {
    var dataset = this.props.dataset;
    var outerRadius = 150;

    var arcs = d3.select('g');
    var path = arcs.selectAll('path');
    path.remove();
    var arc = d3.arc().innerRadius(0).outerRadius(150);
    var pie = d3.pie().value(function(d) {
      return d.props;
    });
    var color = d3.scaleOrdinal(d3.schemeCategory10);


    path = arcs.selectAll('path')
               .data(pie(dataset))
               .enter()
               .append('path')
               .attr(
                   'fill',
                   function(d, i) {
                     return color(i)
                   })
               .attr('d', arc)
               .transition()
               .duration(800)
               .attrTween(
                   'd',
                   function(d) {
                     var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
                     return function(t) {
                       d.endAngle = i(t);
                       return arc(d);
                     }
                   })
               .each(function(d) {
                 this._current = d;
               });
    arcs.selectAll('text')
        .data(pie(dataset))
        .enter()
        .append('text')
        .attr(
            'transform',
            function(d) {  // set the label's origin to the center of the arc
              // we have to make sure to set these before calling arc.centroid
              d.outerRadius = outerRadius;      // Set Outer Coordinate
              d.innerRadius = outerRadius - 5;  // Set Inner Coordinate
              return 'translate(' + arc.centroid(d) + ')';
            })
        .attr('text-anchor', 'middle')  // center the text on it's origin
        .style('fill', 'White')
        .style('font', 'bold 12px Arial')
        .text(function(d, i) {
          return d.data.labels;
        });
  }

  render() {
    return (<div><div ref = 'pie'></div>
            </div>)
  }
}
export default Pie;