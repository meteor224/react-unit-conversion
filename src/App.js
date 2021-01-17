import React from 'react';
import './App.css';
import {LengthConversion} from './components/lengthConversion.js';
import {WeightConversion} from './components/weightConversion.js';
import {SquareAreaConversion} from './components/squareAreaConversion.js';
import {CubicAreaConversion} from './components/cubicAreaConversion.js';
import {VolumeConversion} from './components/volumeConversion.js';
import {TemperatureConversion} from './components/temperatureConversion.js';

function App() {
  return (
    <>
    <LengthConversion />
    <WeightConversion />
    <SquareAreaConversion />
    <CubicAreaConversion />
    <VolumeConversion />
    <TemperatureConversion />
    </>
  );
}

export default App;