/*import './Force.css';

import React, {Component} from 'react';


class Force extends Component {
  constructor(props) {
    super(props);
  }

  fetchData() {
      fetch('')
      return 
  }  

  render() {
    var dataset = fetchData();
      
    var svg = d3.select('svg'), width = +svg.attr('width'),
        height = +svg.attr('height');

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var simulation =
        d3.forceSimulation()
            .force('link', d3.forceLink().id(function(d) {
              return d.id;
            }))
            .force('charge', d3.forceManyBody())
            .force('center', d3.forceCenter(width / 2, height / 2));

    d3.json(dataset, function(error, graph) {
      if (error) throw error;

      var link = svg.append('g')
                     .attr('class', 'links')
                     .selectAll('line')
                     .data(graph.links)
                     .enter()
                     .append('line')
                     .attr('stroke-width', function(d) {
                       return Math.sqrt(d.value);
                     });

      var node = svg.append('g')
                     .attr('class', 'nodes')
                     .selectAll('circle')
                     .data(graph.nodes)
                     .enter()
                     .append('circle')
                     .attr('r', 5)
                     .attr(
                         'fill',
                         function(d) {
                           return color(d.group);
                         })
                     .call(d3.drag()
                               .on('start', dragstarted)
                               .on('drag', dragged)
                               .on('end', dragended));

      node.append('title').text(function(d) {
        return d.id;
      });

      simulation.nodes(graph.nodes).on('tick', ticked);

      simulation.force('link').links(graph.links);

      function ticked() {
        link.attr(
                'x1',
                function(d) {
                  return d.source.x;
                })
            .attr(
                'y1',
                function(d) {
                  return d.source.y;
                })
            .attr(
                'x2',
                function(d) {
                  return d.target.x;
                })
            .attr('y2', function(d) {
              return d.target.y;
            });

        node.attr('cx', function(d) {
              return d.x;
            }).attr('cy', function(d) {
          return d.y;
        });
      }
    });

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return (
      <div className='Chart'>
        <div className='dropdown'>
          <button className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
    Chart Type
    <span className='caret'></span>
          </button>
  <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
            <li><a onClick={this.getLambda}>Pi</a></li>
            <li><a onClick={this.getLambda}>Scatter Plot</a></li>
            <li><a onClick={this.getLambda}>Visitors</a></li>
  </ul>        
        </div>
        <div className='Chart-header'>
          <iframe width='100%' height='500' frameBorder='0' scrolling='no'
            src='https://s3-us-west-2.amazonaws.com/perceival-html-plots/default/sample-scatter.html'></iframe>
        </div>
        <p className='Chart-intro'>
        </p>
      </div>
    );
  }
}

export default Force;*/