
$( document ).ready(function() {
  var thermostat = new Thermostat();
  checkTemperature();

  $('#increasetemp').click(function() {
    thermostat.increaseTemperature();
    checkTemperature();
  });

  $('#decreasetemp').click(function() {
    thermostat.decreaseTemperature();
    checkTemperature();
  });

  $('#powersaveon').click(function() {
    thermostat.powerSaveOn();
    $('#power-saving-status').text('on');
    checkTemperature();
  });

  $('#powersaveoff').click(function() {
    thermostat.powerSaveOff();
    $('#power-saving-status').text('off');
    checkTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemp();
    checkTemperature();
  });

  function checkTemperature() {
$('#temperature').text(thermostat.temperature);
$('#temperature').attr('class', thermostat.energyChecker());
}



});
