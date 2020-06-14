import React from 'react';
import { render } from '@testing-library/react';
import  Chart from '../Chart';

describe('<Chart />', () => {
  it('render snapshot', () => {
    const data = [];
    const { container } = render(<Chart data={data} />);
    expect(container).toMatchSnapshot();
  })
});