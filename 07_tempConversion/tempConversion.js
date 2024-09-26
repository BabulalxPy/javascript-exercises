const convertToCelsius = function(temp) {
  let celsius = (temp-32)*(5/9);
  let roundedCelsius = Math.round(celsius*10)/10;
  return roundedCelsius;
  
};

const convertToFahrenheit = function(temp2) {
  let fahrneheit = (temp2*(9/5)+32);
  let roundedFahrenheit = Math.round(fahrneheit*10)/10;
  return roundedFahrenheit;
};
//console.log(convertToCelsius(100))
//console.log(convertToFahrenheit(100))
// Do not edit below this line
module.exports = {convertToCelsius, convertToFahrenheit };
