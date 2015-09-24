'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
import Router from 'react-router';
import RepairStore from '../stores/RepairStore.js';
import RepairActions from '../actions/RepairActions.js';

var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
  } = Router;

var ProductLine = React.createClass({

  componentWillMount() {
    RepairActions.fetchProductLines();
  },

  render() {
    var productLines = this.props.productLines.map((product) => {
      return <li key={product.id}>{product.name}</li>;
    });

    return (
      <div className="Main">
        Product Line blah blah.
        {productLines}
      </div>
    );
  }
});

module.exports = ProductLine;
