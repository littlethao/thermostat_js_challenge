// 'use strict';

describe('Airport', function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport(weather);
    plane = jasmine.createSpyObj('plane', ['down','up','isFlying']);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
  });

  describe('plane landing - good conditions', function() {
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });

    it('hangar begins empty', function() {
      expect(airport.hangar()).toEqual([]);
    });
    it('stores plane in the hangar', function() {
      airport.land(plane);
      expect(airport.hangar()).toContain(plane);
    });
    it('calls plane down', function() {
      airport.land(plane);
      expect(plane.down).toHaveBeenCalled();
    });
  });

  describe('plane take off - good conditions', function() {
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });
    it('removes a plane from the hangar', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.hangar()).not.toContain(plane);
    });
    it('calls plane up', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(plane.up).toHaveBeenCalled();
    });
  });

  describe('plane take off - stormy weather', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it('prevents take off if weather is stormy', function() {
      expect(function(){airport.takeOff(plane);}).toThrowError('bad weather, can not take off');
    });
  });
});
