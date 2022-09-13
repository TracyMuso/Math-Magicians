import React from 'react';
import Button from './button';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div id="calculator">
        <input type="text" id="inputVal" value="0" />
        <div id="row1">
          <Button label="AC" id="clear" />
          <Button label="+/-" id="switchSign" />
          <Button label="%" id="percentage" />
          <Button label="÷" id="divide" />
        </div>
        <div id="row2">
          <Button label="7" id="seven" />
          <Button label="8" id="eight" />
          <Button label="9" id="nine" />
          <Button label="x" id="multiply" />
        </div>
        <div id="row3">
          <Button label="4" id="four" />
          <Button label="5" id="five" />
          <Button label="6" id="six" />
          <Button label="-" id="minus" />
        </div>
        <div id="row4">
          <Button label="1" id="one" />
          <Button label="2" id="two" />
          <Button label="3" id="three" />
          <Button label="+" id="plus" />
        </div>
        <div id="row5">
          <Button label="0" id="zero" />
          <Button label="." id="point" />
          <Button label="=" id="equalSign" />
        </div>
      </div>
    );
  }
}
