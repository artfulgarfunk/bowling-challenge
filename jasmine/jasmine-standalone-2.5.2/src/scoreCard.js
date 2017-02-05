'use strict';

function scoreCard () {
  this.totalScore = 0;
  this.frames = []
  this.spareBonus = false
  this.strikeBonus = false
  this.strikeBonus1 = false
  this.currentFrame = []
};

  //  when frames.length is 10, the game is over, unless any of the last 2 frames contain a strike.
scoreCard.prototype.addBowl = function(pins1, pins2=null) {
  // if pins1 is a strike, make a new frame with nil as bowl 2, but keep strike bonus true!
  // if pin2 is equal to nil or 10, strike bonus is true.

    this.currentFrame.push(pins1);
    this.currentFrame.push(pins2);
    this.frames.push(this.currentFrame);

    if (this.strikeBonus === true) {
      this.addToScore(pins1,pins2)
      this.addToScore(pins1,pins2)
      this.strikeBonus1 = true
    } else if (this.spareBonus === true)
      { this.totalScore += pins1
        this.addToScore(pins1,pins2)
    } else {
      this.addToScore(pins1,pins2)
   };
   this.currentFrame = []
};

// keep all this logic and run it on each frame?
scoreCard.prototype.BonusUpdate = function(pins1, pins2) {
  if (pins1 === 10 || pins2 === 10) {
    this.strikeBonus = true
    this.spareBonus = false
    this.strikeBonus1 = false
} else if (pins1 + pins2 >= 10)
    {this.spareBonus = true
    this.strikeBonus = false
    this.strikeBonus1 = false}
  else {
    this.spareBonus = false
  };
}

scoreCard.prototype.addToScore = function(pins1,pins2) {
  this.totalScore += pins1
  this.totalScore += pins2
  this.BonusUpdate(pins1,pins2)
}
