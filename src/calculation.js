export function calculateUnitConversion(type, value, unit1, unit2) {
  console.log("unit1 " + unit1);
  console.log("unit2 " + unit2);
  console.log("value " + value);

  // length conversion factors to millimetres
  const inch = 25.4, foot = 304.8, yard = 914.4, mile = 1609344, millimetre = 1, 
    centimetre = 10, metre = 1000, kilometre = 1000000;
  
  // weight conversion factors to grams
  const ounce = 28.3495231, pound = 453.59237, stone = 6350.29318, ukTon = 1016046.91, 
    usTon = 907184.74, gram = 1, kilo = 1000, metricTon = 1000000;
  
  // square area conversion factors to millimetres
  const acres = 40468564.2, squareMile = 25899881103.36, squareYard = 8361.2736, 
    squareFeet = 929.0304, squareInche = 6.4516, hectare = 100000000, 
    squareKilometre = 10000000000, squareMetre = 10000, squareCentimetre = 1;
  
  // cubic area conversion factors to millimetres
  const cubicFoot = 28316.8466, cubicYard = 764554.858, cubicMetre = 1000000;
  
  // volume conversion factors to millilitres
  const ukTeaspoon = 5.91939047, usTeaspoon = 4.92892159, ukTablespoon = 17.7581714, 
    usTablespoon = 14.7867648, ukFluidOunce = 28.4130742, usFluidOunce = 29.5735296, 
    ukCup = 250, usCup = 236.588237, ukPint = 568.261485, usPint = 473.176473, 
    ukQuart = 1136.52297, usQuart = 946.352946, ukGallon = 4546.09188, 
    usGallon = 3785.41178, millilitre = 1, litre = 1000;

  let decimalPoints = 8;
  let result, unitArray, conversion;

  switch(type) {
    case 'length': unitArray = [inch, foot, yard, mile, millimetre, centimetre, metre, kilometre]; break;
    case 'weight': unitArray = [ounce, pound, stone, ukTon, usTon, gram, kilo, metricTon]; break;
    case 'square-area': unitArray = [acres, squareMile, squareYard, squareFeet, squareInche, hectare, squareKilometre, squareMetre, squareCentimetre]; break;
    case 'cubic-area': unitArray = [cubicFoot, cubicYard, cubicMetre]; break;
    case 'volume': unitArray = [ukTeaspoon, usTeaspoon, ukTablespoon, usTablespoon, ukFluidOunce, usFluidOunce, ukCup, usCup, ukPint, usPint, ukQuart, usQuart, ukGallon, usGallon, millilitre, litre]; break;
   
    default: break;
  }

  conversion = unitArray[unit1] / unitArray[unit2];

  result = (value * conversion).toFixed(decimalPoints);

  return result;
}

export function calculateTemperatureConversion(value, unit1, unit2) {
  console.log("unit1 " + unit1);
  console.log("unit2 " + unit2);
  console.log("value " + value);
  
  const unit1Value = parseFloat(unit1);
  const unit2Value = parseFloat(unit2);
  const valueValue = parseFloat(value);
  let decimalPoints = 8;
  let result = 0;

  console.log(unit1Value === 1 && unit2Value === 3);

  // Celcius to Fahrenheit
  if (unit1Value === 0 && unit2Value === 1) {
    result = (valueValue * (9 / 5) + 32);
  // Celcius to Kelvin
  } else if (unit1Value === 0 && unit2Value === 2) {
    result = valueValue + 273.15;
  // Fahrenheit to Celcius
  } else if (unit1Value === 1 && unit2Value === 0) {
    result = (valueValue - 32) * (5 / 9);
  // Fahrenheit to Kelvin
  } else if (unit1Value === 1 && unit2Value === 2) {
    result = (valueValue - 32) * (5 / 9) + 273.15;
  // Kelvin to Celcius
  } else if (unit1Value === 2 && unit2Value === 0) {
    result = valueValue - 273.15;
  // Kelvin to Fahrenheit
  } else if (unit1Value === 2 && unit2Value === 1) {
    result = (valueValue - 273.15) * (9 / 5) + 32;
  // Like for like
  } else if (unit1Value === unit2Value) {
    result = valueValue;
  } else {
    result = valueValue;
  }

  result = result.toFixed(decimalPoints);

  return result;
}