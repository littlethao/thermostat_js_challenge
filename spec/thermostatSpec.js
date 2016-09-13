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
});
