'use strict';

function scoreCard () {
  this.score = 0;
  this.frames = []
  this.spareBonus = false
};

scoreCard.prototype.bowl = function(pins1, pins2) {
    var frame = [];
    frame.push(pins1);
    frame.push(pins2);
    this.frames.push(frame);
    if (this.spareBonus === false)
    { this.score += pins1;
    this.score += pins2;
    this.spareBonusCheck(pins1,pins2);
  } else {
    this.score += (pins1 * 2);
    this.score += pins2;
    this.spareBonusCheck(pins1,pins2);
  };
};

scoreCard.prototype.spareBonusCheck = function(pins1, pins2) {
  if (pins1 + pins2 >= 10)
  {this.spareBonus = true}
  else {
    this.spareBonus = false
  };
}
