DEFAULT_TEMPERATURE = 20;

Thermostat = function() {
  this._temperature = DEFAULT_TEMPERATURE;
};

Thermostat.prototype = {
  currentTemperature: function() {
    return this._temperature;
  },
  increaseTemperature: function() {
    this._temperature ++;
  },
  decreaseTemperature: function() {
    this._temperature --;
  },
};
