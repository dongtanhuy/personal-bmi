import React from 'react';
import { render } from '@testing-library/react';
import History from '../History';

describe('<History />', () => {

  test('renders History', () => {
    const { container } = render(<History data={[]} />);
    expect(container).toMatchSnapshot();
  });
  
  test('should not render if data null', () => {
    const data = [];
    const { container } = render(<History data={data} />);
    expect(container.children.length).toBe(0);
  })
  
  test('should render table with one row', () => {
    const data = [{
      id: 'this is id',
      date: 'date',
      weight: 'weight',
      height: 'height',
      bmi: 'normal'
    }];
    const {container} = render(<History data={data} />);
    const tableBody = container.querySelector("tbody");
  
    expect(tableBody.children.length).toBe(1);
  });
  
  test('should render table with 2 rows', () => {
    const data = [{
      id: 'this is id',
      date: 'date',
      weight: 'weight',
      height: 'height',
      bmi: 'normal'
    },
    {
      id: 'this is id 2',
      date: 'date',
      weight: 'weight',
      height: 'height',
      bmi: 'normal'
    }
    ];
    const {container} = render(<History data={data} />);
    const tableBody = container.querySelector("tbody");
  
    expect(tableBody.children.length).toBe(2);
  });
});
