import * as d3 from 'd3';
import React, {Component} from 'react';

class Pie extends Component {
  constructor() {
    super();
    this.state = {
      dataset:
          {labels: ['18-24', '25-34', '35-44'], props: [0.298, 0.568, 0.134]}
    }
  }

  componentDidMount() {
    const context = this.setContext();
    this.setBackground(context);
  }

  setContext() {
    var dataset = this.state.dataset.props;
    var pie = d3.pie();
    var w = this.props.width;
    var h = this.props.height;
    var outerRadius = w / 2;
    var innerRadius = 0;
    var svg = d3.select(this.refs.pie)
                  .append('svg')
                  .attr('width', w)
                  .attr('height', h)
                  .attr('id', 'd3-pie');

    return svg.selectAll('g.arc')
        .data(pie(dataset))
        .enter()
        .append('g')
        .attr('class', 'arc')
        .attr(
            'transform', 'translate(' + outerRadius + ', ' + outerRadius + ')');
  }

  arc() {
    return d3.arc().innerRadius(150).outerRadius(20);
  }

  setBackground(context) {
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    return context.append('path')
        .attr(
            'fill',
            function(d, i) {
              return color(i)
            })
        .attr('d', this.arc());
  }

  render() {
        return (
            <div ref='pie'></div>
        )
    }

}
export default Pie;