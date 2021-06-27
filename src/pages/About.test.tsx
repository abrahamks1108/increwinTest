import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test/test-utils';


import About from './About';

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
 
  const dom=render.Wrapper(<About/>);  
  expect(dom.getByRole('h1')).toHaveTextContent('About Page')
 
});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.
  const dom=render.Wrapper(<About/>); 
  userEvent.click(dom.getByRole('button'))
  expect(dom.getByRole('p')).toEqual(1)
});
