$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.showTemperature());
    $('#temperature').attr('class', thermostat.colourSwitch());
  }

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-switch').click(function() {
    thermostat.powerSaveSwitch();
    $('#powersaving-status').text(thermostat._powerSaveMode);
  });

});
