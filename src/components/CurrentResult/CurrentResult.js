import React from 'react';

const CurrentResult = ({
  weight,
  height,
  bmi,
}) => {
  return (
    <>
      <h1>W: {weight}</h1>
      <h1>H: {height}</h1>
      <h1>BMI: {bmi}</h1>
    </>
  )
}

export default CurrentResult;
