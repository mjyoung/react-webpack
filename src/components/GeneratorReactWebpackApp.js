'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Router = require('react-router');

var {
  //Route,
  //DefaultRoute,
  //NotFoundRoute,
  RouteHandler,
  Link
  } = Router;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var GeneratorReactWebpackApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
        <Link to="/">Home</Link><br />
        <Link to="repair">Repair</Link>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = GeneratorReactWebpackApp;
