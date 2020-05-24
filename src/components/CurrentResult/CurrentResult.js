import React from 'react';
import { BMIToString } from 'services/bmiCalculationService';
import './CurrentResult.scss';

const CurrentResult = ({
  weight,
  height,
  bmi,
  date,
  onSave,
  onReset,
}) => {
  return (
    <div className="CurrentResult">
      <div className="CurrentResult__Card CurrentResult__Wide">
        <div className="CurrentResult__ResultContainer">
          <span>Weight: {weight} kg</span>
          <span>Height: {height} cm</span>
          <span>Date: {date}</span>
        </div>
        <h2 className={`CurrentResult__Color ${BMIToString(bmi)}`}>BMI: {BMIToString(bmi)}</h2>
        <div className="CurrentResult__Buttons">
          <button onClick={onSave} className="button button-primary">Save</button>
          <button onClick={onReset} className="button button-secondary">Reset</button>
        </div>
      </div>
      <div className="CurrentResult__Card CurrentResult__Narrow">
        <h2>BMI Categories</h2>
        <ul>
          <li className="underweight">
            Underweight: <strong>{'less than 18.5'}</strong>
          </li>
          <li className="normal">
            Normal weight: <strong>{'18.5 - 24.9'}</strong>
          </li>
          <li className="overweight">
            Overweight: <strong>{'25 - 29.9'}</strong>
          </li>
          <li className="obesity">
            Obesity: <strong>{'30 or greater'}</strong>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CurrentResult;
