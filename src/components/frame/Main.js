'use strict';

var React = require('react/addons');
var Router = require('react.router');
var {
  //Route,
  //DefaultRoute,
  //NotFoundRoute,
  RouteHandler,
  Link
  } = Router;

require('styles/frame/Main.scss');

var Main = React.createClass({

  render: function () {
    return (
        <div className="Main">
          <p>Content for Main</p>
        </div>
      );
  }
});

module.exports = Main;
