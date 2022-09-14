/* eslint-disable react/no-unused-state */
import React from 'react';
import Button from './button';
import { calculate } from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      display: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const btn = e.target.value;
    this.setState((prevState) => ({ ...calculate(prevState, btn) }), this.displayOutput);
  }

  displayOutput() {
    const { total, next } = this.state;
    if (!next && !total) this.setState({ display: '0' });
    else this.setState({ display: next ?? total });
  }

  render() {
    const { display } = this.state;
    return (
      <div id="calculator">
        <div id="inputVal">{ display }</div>
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
