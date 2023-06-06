const convertToCelsius = function(frnht) {
    let cel = (frnht-32)*5/9;
    cel = Math.round(10*cel)/10;
    return cel;
};

const convertToFahrenheit = function(cels) {
  fnht = cels*9/5 + 32;
  fnht = Math.round(10*fnht)/10;
  return fnht;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
