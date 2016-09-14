// 'use strict';

Airport = function(weather) {
  this._hangar = [];
  this._weather = weather || new Weather();
};

Airport.prototype = {
  hangar: function() {
    return this._hangar;
  },

  land: function(plane) {
    plane.down();
    this._hangar.push(plane);
  },

  takeOff: function(plane) {
    if (this._weather.isStormy()) {
      throw new Error( 'bad weather, can not take off');
    }
    plane.up();
    this._hangar.pop(plane);
  },
};
