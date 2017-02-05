'use strict';

function scoreCard () {
  this.score = 0;
  this.pins = []
};

scoreCard.prototype.bowl = function(pins) {
  (this.pins).push(pins);
};
