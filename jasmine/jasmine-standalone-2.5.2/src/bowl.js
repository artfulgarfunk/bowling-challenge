'use strict';

function Bowl () {
    this.pins = 0
};

Bowl.prototype.turn = function(pins) {
  this.pins += pins
};
