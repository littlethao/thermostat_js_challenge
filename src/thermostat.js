function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype = {
  currentTemperature: function() {
    return this.temperature;
  },

  increaseTemperature: function(currentTemperature) {
    this.temperature += 1;
  },

  decreaseTemperature: function(currentTemperature) {
    this.temperature -= 1;
  }
};
