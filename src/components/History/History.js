import React from 'react';
import { BMIToString } from 'services/bmiCalculationService';

import './History.scss';

const History = ({ data }) => {
  const renderItem = () => {
    return data.map((item, index) => (
      <tr key={item.id}>
        <td>{index+1}</td>
        <td>
          {item.date}
        </td>
        <td>
          {item.weight}
        </td>
        <td>
          {item.height}
        </td>
        <td>
          {item.bmi}
        </td>
        <td>
          {BMIToString(item.bmi)}
        </td>
      </tr>
    ))
  }
  if (data.length === 0) {
    return null
  }
  return (
    <div className="History card">
      <h1>History</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Date</th>
            <th>Weight (kg)</th>
            <th>Heigh (cm)</th>
            <th>BMI</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {renderItem()}
        </tbody>
      </table>
    </div>
  )
}

export default History;