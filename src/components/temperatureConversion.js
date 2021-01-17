import React from 'react';
import unitData from '../data/units.json';
import {calculateTemperatureConversion} from '../calculation.js';

const units = unitData.temperature;

export class TemperatureConversion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '0', 
      output: '', 
      unit1Index: '0', 
      unit2Index: '0'
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleUnit1Change = this.handleUnit1Change.bind(this);
    this.handleUnit2Change = this.handleUnit2Change.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this); 
  }

  render() {
    return (
      <>
        <fieldset>
          <legend>Temperature Conversion</legend>
          <label htmlFor="temperature-amount">Convert</label>
          <input id="temperature-amount" type="number" onChange={this.handleValueChange} />
          <label htmlFor="temperature-unit-1">Select a unit</label>  
          <select id="temperature-unit-1" onChange={this.handleUnit1Change}>
            {units.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <label htmlFor="temperature-unit-2">Select another unit</label> 
          <select id="temperature-unit-2" onChange={this.handleUnit2Change}>
            {units.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <button id="temperature-convert" onClick={this.handleSubmitClick}>Convert</button>
          <output 
            name="temperature-result"
            id="temperature-result" 
            htmlFor="temperature-amount temperature-unit-1 temperature-unit-2" 
            role="alert">
            {this.state.output}
          </output>
        </fieldset>
      </>
    );
  }

  handleValueChange(e) {
    this.setState({ value: e.target.value });
  }

  handleUnit1Change(e) {
    this.setState({ unit1Index: e.target.value });
  }

  handleUnit2Change(e) {
    this.setState({ unit2Index: e.target.value });
  }

  handleSubmitClick(e) {
    e.preventDefault();
    if (this.state.value === 0) {
      return;
    }

    this.setState(state => ({
      output: calculateTemperatureConversion(
        this.state.value,
        this.state.unit1Index,
        this.state.unit2Index
      )
    }));
  }
}