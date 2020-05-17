const calculateBMI = (weight, height) => {
  const heigthToMeter = height / 100;
  const bmi = (weight / (heigthToMeter * heigthToMeter)).toFixed(1);
  if (bmi < 18.5) {
    return 'Underweight';
  } if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Normal weight';
  } if (bmi >= 25 && bmi <= 29.9) {
    return 'Overweight';
  }
  return 'Obesity';
};
export default calculateBMI;
