'use strict';

var React = require('react/addons');
var Router = require('react-router');
import ProductLine from './ProductLine.js';

require('styles/repair/Repair.scss');

var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
  } = Router;

var Repair = React.createClass({

  //mixins: [Router.Navigation],
  render: function () {
    return (
      <div>
        Repair Content blah blah.
        <ProductLine/>
        <RouteHandler/>
      </div>

    );
  }
});

module.exports = Repair;
