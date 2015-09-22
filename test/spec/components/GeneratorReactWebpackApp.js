'use strict';

describe('GeneratorReactWebpackApp', () => {
  let React = require('react/addons');
  let GeneratorReactWebpackApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GeneratorReactWebpackApp = require('components/GeneratorReactWebpackApp.js');
    component = React.createElement(GeneratorReactWebpackApp);
  });

  it('should create a new instance of GeneratorReactWebpackApp', () => {
    expect(component).toBeDefined();
  });
});
