'use strict';

import React from 'react';
import Locations from './locations/Locations';

var Router = require('react-router');
var { Route } = Router;

var content = document.getElementById('content');

var Routes = (
  <Route handler={Locations}>
    <Route name="/" handler={Locations}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
