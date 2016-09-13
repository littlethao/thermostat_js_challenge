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
  },

  reset: function() {
    this.temperature = 20;
  },

  powerSavingModeOff: function(){
    this.MAXIMUM_TEMPERATURE += 7;
  },

  currentColour: function(){
    if(this.temperature < 18){
      return "green";
    }
    else if(this.temperature < 25){
      return "yellow";
    }
    else{
      return "red";
    }
  }
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function () {
  return this.temperature === this.MAXIMUM_TEMPERATURE;
};
