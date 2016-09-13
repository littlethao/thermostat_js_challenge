describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts with temperature at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("increase the temperature by 1 with the up button", function(){
    thermostat.increaseTemperature();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it("should decrease the temperature by 1", function() {
    thermostat.decreaseTemperature();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it("reaches its lowest temperature at 10 degrees", function(){
    for (var i = 0; i < 10; i++) {
    thermostat.decreaseTemperature();
  }
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it("reaches its lowest temperature at 10 degrees", function(){
    for (var i = 0; i < 11; i++) {
    thermostat.decreaseTemperature();
  }
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it("reaches its highest temperature at 25 degrees", function (){
    for (var i = 0; i < 6; i++) {
    thermostat.increaseTemperature();
  }
    expect(thermostat.currentTemperature()).toEqual(25);
  });

  it("increases maximum temperature to 32 degrees when power saving mode is off", function () {
    thermostat.powerSavingModeOff();
    for (var i = 0; i < 7; i++) {
    thermostat.increaseTemperature();
  }
    expect(thermostat.currentTemperature()).toEqual(27);
  });
});
