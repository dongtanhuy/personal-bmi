import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import Input from '../Input';

describe('Input component', () => {
  const mockOnChange = jest.fn();
  const props = {
    onChange: mockOnChange,
    value: 'value',
    label: 'weight',
    placeholder: 'weight',
  }
  test('to matchSnapshot', () => {
    const { container,getByText, getByPlaceholderText } = render(<Input {...props} />);
    
    const label = getByText('weight')
    const input = getByPlaceholderText('weight')
    expect(label.innerHTML).toBe('weight')
    expect(input).toHaveAttribute('type', 'number')
  })

  test('should call onChange', () => {
    const { getByPlaceholderText } = render(<Input {...props} />);
    const input = getByPlaceholderText('weight')
    fireEvent.change(input, { target: {value: '123 '}})
    expect(mockOnChange).toBeCalled();
  })

})