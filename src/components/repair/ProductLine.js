'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
import Router from 'react-router';
var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
  } = Router;

//require('styles/frame/Frame.scss');

var ProductLine = React.createClass({

  render: function () {
    return (
      <div className="main">
        Product Line blah blah.
      </div>
    );
  }
});

module.exports = ProductLine;
