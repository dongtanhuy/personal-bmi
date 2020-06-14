import { calculateBMI, BMIToString } from '../bmiCalculationService';

describe('calculateBMI', () => {
  it('should return value of BMI when input weight and height', () => {
    const weight = 60;
    const height = 180;

    const bmi = calculateBMI(weight, height);

    expect(bmi).toEqual("18.5");
  })
})

describe('BMIToString', () => {
  it('should return underweight if bmi < 18.5', () => {
    const underweightBMI =  14;

    const BMIStatus = BMIToString(underweightBMI);

    expect(BMIStatus).toEqual("underweight");
  });

  it('should return normal if bmi = 18.5', () => {
    const normalBMI = 18.5;

    const BMIStatus = BMIToString(normalBMI);

    expect(BMIStatus).toEqual("normal");
  });

  it('should return normal if  18.5 < bmi < 24.9', () => {
    const normalBMI = 22;

    const BMIStatus = BMIToString(normalBMI);

    expect(BMIStatus).toEqual("normal");
  });

  it('should return normal if bmi = 24.9', () => {
    const normalBMI = 24.9;

    const BMIStatus = BMIToString(normalBMI);

    expect(BMIStatus).toEqual("normal");
  });

  it('should return overweight if bmi = 25', () => {
    const overweightBMI = 25;

    const BMIStatus = BMIToString(overweightBMI);

    expect(BMIStatus).toEqual("overweight");
  });

  it('should return overweight if  25 < bmi < 29.9', () => {
    const overweightBMI = 28;

    const BMIStatus = BMIToString(overweightBMI);

    expect(BMIStatus).toEqual("overweight");
  });

  it('should return overweight if  bmi = 29.9', () => {
    const overweightBMI = 28;

    const BMIStatus = BMIToString(overweightBMI);

    expect(BMIStatus).toEqual("overweight");
  });

  it('should return obesity if bmi > 29.9', () => {
    const BMI = 30;

    const BMIStatus = BMIToString(BMI);

    expect(BMIStatus).toEqual("obesity");
  });
})