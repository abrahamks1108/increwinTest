import React from 'react';
import { render } from '../../test/test-utils';
import '../../test/test-utils';

import Home from './Home';

it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
  const dom=render.Wrapper(<Home/>);  
  expect(dom.getByRole('h1')).toHaveTextContent('Welcome!')
  expect(dom.getByRole('Link')).toHaveTextContent('Go to about')
});
