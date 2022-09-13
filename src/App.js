/* eslint-disable react/prefer-stateless-function */
import './App.css';
import React from 'react';
import Calculator from './components/calculator';

export default class App extends React.Component {
  render() {
    return (
      <Calculator />
    );
  }
}
