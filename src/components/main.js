'use strict';

var GeneratorReactWebpackApp = require('./GeneratorReactWebpackApp');
import Repair from './repair/Main';
var React = require('react');

var Router = require('react-router');
var { Route } = Router;

var content = document.getElementById('content');

var Routes = (
  <Route handler={GeneratorReactWebpackApp}>
    <Route name="/" handler={GeneratorReactWebpackApp}/>
    <Route name="repair" path="repair" handler={Repair} />
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
