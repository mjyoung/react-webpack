'use strict';

var React = require('react/addons');
var Router = require('react-router');
import ProductLine from './components/ProductLine.js';
var AltContainer = require('alt/AltContainer');
import RepairStore from './stores/RepairStore.js';
import RepairActions from './actions/RepairActions.js';

require('./styles/Repair.scss');

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
      <div className="main">
        Repair Content blah blah.
        <AltContainer store={RepairStore}>
          <ProductLine/>
          <RouteHandler/>
        </AltContainer>
      </div>

    );
  }
});

module.exports = Repair;
