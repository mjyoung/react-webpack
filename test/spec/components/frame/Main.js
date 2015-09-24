'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Main from 'components/frame/Locations.js';

describe('Main', () => {
    let MainComponent;

    beforeEach(() => {
        MainComponent = createComponent(Main);
    });

    it('should have its component name as default className', () => {
        expect(MainComponent._store.props.className).toBe('Main');
    });
});
