/* eslint-disable react/no-unused-state */
import React from 'react';
import Button from './button';
import { calculate } from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
      display: '',
    };
  }

  handleChange(e) {
    const output = calculate(this.state, e.target.textContent);
    this.setState(output);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="calculator">
        <div id="inputVal">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </div>
        <div id="row1">
          <Button label="AC" id="clear" handleChange={this.handleChange} />
          <Button label="+/-" id="switchSign" handleChange={this.handleChange} />
          <Button label="%" id="percentage" handleChange={this.handleChange} />
          <Button label="÷" id="divide" handleChange={this.handleChange} />
        </div>
        <div id="row2">
          <Button label="7" id="seven" handleChange={this.handleChange} />
          <Button label="8" id="eight" handleChange={this.handleChange} />
          <Button label="9" id="nine" handleChange={this.handleChange} />
          <Button label="x" id="multiply" handleChange={this.handleChange} />
        </div>
        <div id="row3">
          <Button label="4" id="four" handleChange={this.handleChange} />
          <Button label="5" id="five" handleChange={this.handleChange} />
          <Button label="6" id="six" handleChange={this.handleChange} />
          <Button label="-" id="minus" handleChange={this.handleChange} />
        </div>
        <div id="row4">
          <Button label="1" id="one" handleChange={this.handleChange} />
          <Button label="2" id="two" handleChange={this.handleChange} />
          <Button label="3" id="three" handleChange={this.handleChange} />
          <Button label="+" id="plus" handleChange={this.handleChange} />
        </div>
        <div id="row5">
          <Button label="0" id="zero" handleChange={this.handleChange} />
          <Button label="." id="point" handleChange={this.handleChange} />
          <Button label="=" id="equalSign" handleChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
