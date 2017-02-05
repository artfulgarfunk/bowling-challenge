'use strict';

function scoreCard () {
  this.score = 0;
  this.frames = []
  this.spareBonus = false
  this.strikeBonus = false
};

scoreCard.prototype.bowl = function(pins1, pins2) {
    var frame = [];
    frame.push(pins1);
    frame.push(pins2);
    this.frames.push(frame);

    if (this.strikeBonus === true) {
      this.addToScore(pins1,pins2)
      this.addToScore(pins1,pins2)
    } else if (this.spareBonus === true)
      { this.score += pins1
        this.addToScore(pins1,pins2)
    } else {
      this.addToScore(pins1,pins2)
   };
};

scoreCard.prototype.BonusUpdate = function(pins1, pins2) {
  if (pins1 === 10 || pins2 === 10) {
    this.strikeBonus = true
    this.spareBonus = false
} else if (pins1 + pins2 >= 10)
      {this.spareBonus = true
      this.strikeBonus = false}
  else {
    this.spareBonus = false
  };
}

scoreCard.prototype.addToScore = function(pins1,pins2) {
  this.score += pins1
  this.score += pins2
  this.BonusUpdate(pins1,pins2)
}
