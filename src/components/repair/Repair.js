'use strict';

var React = require('react/addons');
var Router = require('react-router');

require('styles/repair/Main.scss');

var Main = React.createClass({

  mixins: [Router.Navigation],

  render: function () {
    return (
        <div className="Main">
          <p>Content for Main!</p>
        </div>
      );
  }
});

module.exports = Main;
