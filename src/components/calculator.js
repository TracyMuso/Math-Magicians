import React, { useState, useEffect } from 'react';
import Button from './button';
import { calculate } from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const { total, next } = obj;
    if (!next && !total) setDisplay('');
    else setDisplay(next ?? total);
  }, [obj]);

  const handleChange = (e) => {
    const btn = e.target.value;
    const oldState = ({ ...calculate(obj, btn) });
    setObj(oldState);
  };

  return (
    <>
      <h2 className="mathin">Lets get Mathin!</h2>
      <div id="calculator">
        <div id="inputVal">{ display }</div>
        <div id="row1">
          <Button label="AC" id="clear" handleChange={handleChange} />
          <Button label="+/-" id="switchSign" handleChange={handleChange} />
          <Button label="%" id="percentage" handleChange={handleChange} />
          <Button label="÷" id="divide" handleChange={handleChange} />
        </div>
        <div id="row2">
          <Button label="7" id="seven" handleChange={handleChange} />
          <Button label="8" id="eight" handleChange={handleChange} />
          <Button label="9" id="nine" handleChange={handleChange} />
          <Button label="x" id="multiply" handleChange={handleChange} />
        </div>
        <div id="row3">
          <Button label="4" id="four" handleChange={handleChange} />
          <Button label="5" id="five" handleChange={handleChange} />
          <Button label="6" id="six" handleChange={handleChange} />
          <Button label="-" id="minus" handleChange={handleChange} />
        </div>
        <div id="row4">
          <Button label="1" id="one" handleChange={handleChange} />
          <Button label="2" id="two" handleChange={handleChange} />
          <Button label="3" id="three" handleChange={handleChange} />
          <Button label="+" id="plus" handleChange={handleChange} />
        </div>
        <div id="row5">
          <Button label="0" id="zero" handleChange={handleChange} />
          <Button label="." id="point" handleChange={handleChange} />
          <Button label="=" id="equalSign" handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
