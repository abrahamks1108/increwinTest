import React from 'react';
import { render } from '../../test/test-utils';

import LayoutContainer from './LayoutContainer';

it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  const dom=render.Wrapper(<LayoutContainer/>);  
  expect(dom.getByRole('h1')).toHaveTextContent('About Page')
});
