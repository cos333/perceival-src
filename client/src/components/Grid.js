'use strict';
var React = require('react');
var PropTypes = require('prop-types');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ReactGridLayout = require('react-grid-layout');
ReactGridLayout = WidthProvider(ReactGridLayout);

import './Grid.css';

import Barchart from './Barchart';
import Piechart from './Piechart';
import Linechart from './Linechart';

var Grid = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    onLayoutChange: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      className: "layout",
      items: 20,
      rowHeight: 30,
      onLayoutChange: function() {},
      cols: 12
    };
  },

  getInitialState() {
    var w = 5
    var layout = [
      {i: 'Barchart', x: 0, y: 0, w: 5, h: 10, minW: 5, minH: 10, maxW: 8, maxH: 14},
      {i: 'Piechart', x: 5, y: 0, w: 6, h: 12, minW: 5, minH: 12, maxW: 7, maxH: 14},
      {i: 'Linechart', x: 0, y: 10, w: 6, h: 11, minW: 5, minH: 10, maxW: 7, maxH: 12}
    ]
    return { layout: layout};
  },

  onLayoutChange: function(layout) {
    this.props.onLayoutChange(layout);
  },

  render() {
    return (
      <ReactGridLayout layout={this.state.layout} onLayoutChange={this.onLayoutChange}
          {...this.props}>
        <div key="Barchart"><Barchart /></div>
        <div key="Linechart"><Linechart /></div>
        <div key="Piechart"><Piechart/></div>
      </ReactGridLayout>
    );
  }
});

module.exports = Grid;