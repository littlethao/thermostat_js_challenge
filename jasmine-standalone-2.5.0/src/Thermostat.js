DEFAULT_TEMPERATURE = 20;
MIN_TEMPERATURE = 10;

Thermostat = function() {"use strict";
  this._temperature = DEFAULT_TEMPERATURE;
  this._minimumTemperature = MIN_TEMPERATURE;
};

Thermostat.prototype = {
  showTemperature: function() {
    return this._temperature;
  },
  increaseTemperature: function() {
    this._temperature ++;
  },
  decreaseTemperature: function() {
    if(this._temperature <= this._minimumTemperature){
      throw new Error("Cannot go below minimum temperature.");
    } else {
        this._temperature --;
  }},
};
