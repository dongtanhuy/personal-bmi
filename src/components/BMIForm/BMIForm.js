import React, { useState, useEffect } from 'react';
import { calculateBMI } from 'services/bmiCalculationService';
import { getData, storeData } from 'services/localStorageService';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input';
import CurrentResult from '../CurrentResult';
import './BMIForm.scss';

const BMIForm = () => {
  const initState = () => getData('data') || []
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [state, setState] = useState(initState);
  const [isShownResult, setIsShownResult] = useState(false);
  useEffect(() => {
    storeData('data', state)
  },[state])

  const onChangeWeight = (value) => {
    setWeight(value);
  };
  const onChangeHeight = (value) => {
    setHeight(value);
  };

  const clearInput = () => {
    setWeight('');
    setHeight('');
  };


  const onSubmit = (e) => {
    e.preventDefault();
    setBMI(calculateBMI(weight, height));
    setIsShownResult(true);
  };

  const onResultSave = () => {
    const newValue = {
      id: uuidv4(),
      weight,
      height,
      bmi,
      date,
    }
    setState([...state, newValue])
    // storeData('data',state);
    clearInput();
    setIsShownResult(false);
  }

  const onReset = () => {
    clearInput();
    setIsShownResult(false);
  }

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
  const date = new Date().toLocaleString().split(',')[0];
  return (
    <>
      <form className="BMIForm" onSubmit={onSubmit}>
        <Input placeholder="60" value={weight} onChange={(e) => onChangeWeight(e.target.value)} label="Weight (kg)" />
        <Input placeholder="180" value={height} onChange={(e) => onChangeHeight(e.target.value)} label="Height (cm)" />
        <button disabled={isDisabledButton} className={`BMIForm__button button ${isDisabledButton ? 'disabled' : 'button-primary'}`} type="submit">Calculate</button>
      </form>
      { isShownResult && <CurrentResult onSave={onResultSave} onReset={onReset} date={date} weight={weight} height={height} bmi={bmi} /> }
    </>
  );
};

export default BMIForm;
