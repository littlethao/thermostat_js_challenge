function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 25;
  this.temperature = 20;
}

Thermostat.prototype = {
  currentTemperature: function() {
    return this.temperature;
  },

  increaseTemperature: function() {
    if(this.isMaximumTemperature()) {
      return this.MAXIMUM_TEMPERATURE;
    }
    this.temperature += 1;
  },

  decreaseTemperature: function() {
    if(this.isMinimumTemperature()){
      return this.MINIMUM_TEMPERATURE;
    }
    this.temperature -= 1;
  }
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function () {
  return this.temperature === this.MAXIMUM_TEMPERATURE;
};

Thermostat.prototype.powerSavingModeOff = function(){
  this.MAXIMUM_TEMPERATURE += 7;
};
