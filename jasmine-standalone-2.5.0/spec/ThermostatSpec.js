describe('Thermostat', function() { 'use strict';

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a default temperature of 20', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });
});
