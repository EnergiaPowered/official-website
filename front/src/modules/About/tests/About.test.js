import React from 'react';
import About from '../components/page/index';

import { create } from "react-test-renderer";

// because it's static component and doesn't change often
it('matches snapshot', () => {
  const component = create(<About />);

  expect(component.toJSON()).toMatchSnapshot()
});
