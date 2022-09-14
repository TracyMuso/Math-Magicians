/* eslint-disable import/prefer-default-export */
import Big from 'big-js';

export const operate = (firstNum, secondNum, operation) => {
  const one = Big(firstNum);
  const two = Big(secondNum);

  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString();
    } catch (err) {
      return 'Cannot divide by 0';
    }
  }
  if (operation === '%') {
    try {
      return one.mod(two).toString();
    } catch (err) {
      return 'Cannot find modulo as cant divide by 0';
    }
  }
  throw Error(`Unknown operation '${operation}'`);
};
