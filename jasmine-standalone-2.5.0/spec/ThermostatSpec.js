describe('Thermostat', function() { 'use strict';

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a default temperature of 20', function() {
    expect(thermostat.showTemperature()).toEqual(20);
  });

  it('increases temperature', function() {
    thermostat.increaseTemperature();
    expect(thermostat.showTemperature()).toEqual(21);
  });

  it('decreased temperature', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.showTemperature()).toEqual(19);
  });

  it('cannot go past minimum of 10', function() {
    thermostat._temperature = 10;
    expect(function() {thermostat.decreaseTemperature();}).toThrowError('Cannot go below minimum temperature.');
  });

  it('cannot go past maximum power saving temp of 25', function() {
    thermostat._temperature = 25;
    expect(function() {thermostat.increaseTemperature();}).toThrowError('Cannot go above max temperature.');
  });

  it('cannot go past standard maximum temp of 32', function() {
    thermostat._powerSaveMode = false;
    thermostat._temperature = 32;
    expect(function() {thermostat.increaseTemperature();}).toThrowError('Cannot go above max temperature.');
  });
});
