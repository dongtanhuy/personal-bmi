import React, { useState } from 'react';
import calculateBMI from 'services/bmiCalculationService';
import Input from '../Input';
import CurrentResult from '../CurrentResult';
import './BMIForm.scss';

const BMIForm = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [isShownResult, setIsShownResult] = useState(false);
  const onChangeWeight = (value) => {
    setWeight(value);
  };
  const onChangeHeight = (value) => {
    setHeight(value);
  };

  // const clearInput = () => {
  //   setWeight('');
  //   setHeight('');
  // };


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(weight);
    console.log(height);
    setBMI(calculateBMI(weight, height));
    setIsShownResult(true);
    // clearInput();
  };

  const validateInput = () => {
    if (!weight || !height) {
      return false;
    }
    if (weight < 0 || height < 0) {
      return false;
    }
    return true;
  };

  const isDisabledButton = !validateInput();

  return (
    <>
      <form className="BMIForm" onSubmit={onSubmit}>
        <Input placeholder="60" value={weight} onChange={(e) => onChangeWeight(e.target.value)} label="Weight (kg)" />
        <Input placeholder="180" value={height} onChange={(e) => onChangeHeight(e.target.value)} label="Height (cm)" />
        <button disabled={isDisabledButton} className={`BMIForm__button ${isDisabledButton ? 'disabled' : ''}`} type="submit">Calculate</button>
      </form>
      { isShownResult && <CurrentResult weight={weight} height={height} bmi={bmi} /> }
    </>
  );
};

export default BMIForm;
