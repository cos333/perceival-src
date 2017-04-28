import * as d3 from 'd3';
import React, { Component } from 'react';

class Pie extends Component {
    constructor() {
        super();
        this.state = {
            dataset: [
                {
                    labels: '18-24',
                    props: 0.298,
                },
                {
                    labels: '25-34',
                    props: 0.568,
                },
                {
                    labels: '35-44',
                    props: 0.134,
                }
            ]
        };
        this.updateChart = this.updateChart.bind(this);
        this.setText = this.setText.bind(this);
        this.drawPie = this.drawPie.bind(this);
    }

    componentDidMount() {
        this.drawPie();
    }

    setSvg() {
        var w = this.props.width;
        var h = this.props.height;
        var outerRadius = w / 2;
        return d3.select('#piechart')
            .append('svg')
            .attr('width', w)
            .attr('height', h)
            .attr('id', 'd3-pie')
            .append('g')
            .attr('class', 'arc')
            .attr(
            'transform', 'translate(' + outerRadius + ', ' + outerRadius + ')');
    }

    arc() {
        return d3.arc().innerRadius(150).outerRadius(20);
    }

    drawPaths(arcs) {
        var dataset = this.state.dataset;
        var pie = d3.pie().value(function (d) {
            return d.props;
        });
        // var arc = d3.arc()
        //     .innerRadius(0)
        //     .outerRadius(150);

        var color = d3.scaleOrdinal(d3.schemeCategory10);
        arcs.selectAll("path")
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr("fill", function (d, i) {
                return color(i)
            })
            .transition()
            .delay(300)
            .duration(800);
        // .ease('linear')
        // .attrTween('d', function (d) {
        //     var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
        //     return function (t) {
        //         d.endAngle = i(t);
        //         return arc(d);
        //     }
        // });

    }

    setText(context) {
        var arc = this.arc();
        var dataset = this.state.dataset;
        return context.append('text')
            .attr(
            'transform',
            function (d) {
                return 'translate(' + arc.centroid(d) + ')';
            })
            .attr('text-anchor', 'middle')
            .text(function (d, i) {
                return dataset[i].labels;
            });
    }

    updateChart() {
        // var dataset = [
        //     {
        //         labels: '18-24',
        //         props: 0.568,
        //     },
        //     {
        //         labels: '25-34',
        //         props: 0.134,
        //     },
        //     {
        //         labels: '35-44',
        //         props: 0.298,
        //     }
        // ];
        // this.setState({ dataset: dataset });

        // var pie = d3.pie().value(function (d) {
        //     return d.props;
        // });

        // var path = svg.selectAll('path')
        //     .data(pie(dataset))
        //     .enter()
        //     .append('path');
        // path.data(pie(dataset));
        // path.transition().duration(750).attrTween("d", this.arcTween);
    }


    drawPie() {
        const svg = this.setSvg();
        this.drawPaths(svg);
        this.setText(svg);
    }
    arcTween(a) {
        var i = d3.interpolate(this._current, a);
        this._current = i(0);
        return function (t) {
            return this.arc(i(t));
        };
    }

    render() {
        return (
            <div>
                <button className='btn btn-default' onClick=
                    {this.updateChart} />
                <div ref='pie'></div>
            </div>)
    }
}
export default Pie;