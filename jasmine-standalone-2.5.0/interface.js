$(document).ready(function() {

  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.showTemperature());

  $('#temperature-up').click(function() {
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.showTemperature());
  });

});
