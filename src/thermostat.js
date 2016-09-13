function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
}

Thermostat.prototype = {
  currentTemperature: function() {
    return this.temperature;
  },

  increaseTemperature: function() {
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
