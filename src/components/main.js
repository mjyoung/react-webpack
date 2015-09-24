'use strict';

import React from 'react';
import App from './App.js';
import Frame from './frame/Frame.js';

import Repair from './repair/Repair.js';
import ProductLine from './repair/components/ProductLine.js';

var Router = require('react-router');
var { Route } = Router;

var content = document.getElementById('content');

var Routes = (
  <Route handler={App}>
    <Route name="home" path="/" handler={Frame}/>
    <Route name="repair" path="repair" handler={Repair}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});

/**

 <Route name="repair" path="repair" handler={Repair}>
  <Route name="repairProductLine" path="subpath" handler={ProductLine}/>
 </Route>

**/
