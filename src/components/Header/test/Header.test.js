import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

test('renders App', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});

