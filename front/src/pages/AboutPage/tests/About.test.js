import React from 'react';
import ReactDOM from 'react-dom';
import About from '../index';

import { create } from "react-test-renderer";

// because it's static component and doesn't change often
it('matches snapshot', () => {
  const component = create(<About />);

  expect(component.toJSON()).toMatchSnapshot()
});
