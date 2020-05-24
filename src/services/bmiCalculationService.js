export const calculateBMI = (weight, height) => {
  const heigthToMeter = height / 100;
  const bmi = (weight / (heigthToMeter * heigthToMeter)).toFixed(1);
  return bmi;
};

export const BMIToString = (bmi) => {
  if (bmi < 18.5) {
    return 'underweight';
  } if (bmi >= 18.5 && bmi <= 24.9) {
    return 'normal';
  } if (bmi >= 25 && bmi <= 29.9) {
    return 'overweight';
  }
  return 'obesity';
};
