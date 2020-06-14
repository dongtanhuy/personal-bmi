import React from 'react';
import { render } from '@testing-library/react';
import CurrentResult from '../CurrentResult';

describe('<CurrentResult />', () => {
  it('render snapshot', () => {
    const props = {
      weight: 60,
      height: 180,
      bmi: 18.5,
      onSave: () => jest.fn(),
      onReset: () => jest.fn(),
    }
    const { container } = render(<CurrentResult {...props} />);
    expect(container).toMatchSnapshot();
  })
})