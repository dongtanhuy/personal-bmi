import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import BMIForm from '../BMIForm';

describe('<BMIForm />', () => {
  it('render snapshot', () => {
    const { container } = render(<BMIForm />);
    expect(container).toMatchSnapshot();
  });

  it('should calculate the BMI', () => {
    const { container, getByLabelText } = render(<BMIForm />);
    const weightInput = getByLabelText("Weight (kg)")
    const heightInput = getByLabelText("Height (cm)")
    fireEvent.change(weightInput, { target: { value: '60' } });
    fireEvent.change(heightInput, { target: { value: '60' } });
    const submitBtn = container.querySelector('button');
    fireEvent.click(submitBtn);

    const currentResult =  container.querySelector('.CurrentResult');
    expect(currentResult.children.length).toBe(2);
  });

  it('should save the result', () => {
    const mockOnSaveData = jest.fn();
    const { container, getByLabelText, getByText } = render(<BMIForm onSaveData={mockOnSaveData} />);
    const weightInput = getByLabelText("Weight (kg)")
    const heightInput = getByLabelText("Height (cm)")
    fireEvent.change(weightInput, { target: { value: '60' } });
    fireEvent.change(heightInput, { target: { value: '60' } });
    const submitBtn = container.querySelector('button');
    fireEvent.click(submitBtn);

    const saveButton =  getByText('Save');
    fireEvent.click(saveButton);

    expect(mockOnSaveData).toBeCalled();
  });
});