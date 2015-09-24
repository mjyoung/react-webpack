'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Router = require('react-router');
import Repair from './repair/Repair.js';
import Frame from './frame/Frame.js';

var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
  } = Router;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var App = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
        <Link to="home">Home</Link> | {' '}
        <Link to="repair">Repair</Link>
        <div id="icr-module">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

module.exports = App;
