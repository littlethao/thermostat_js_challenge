
$( document ).ready(function() {
    $("#cities").change(function() {
      var city = this.value;
  $.get("http://api.wunderground.com/api/924e689f3b4a4775/geolookup/conditions/q/" + city + ".json", function(parsed_json) {
    var location = parsed_json['location']['city'];
    var temp_c = parsed_json['current_observation']['temp_c'];
    $('#location').text("Current temperature in " + location + " is: " + temp_c);
    });
  });

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
