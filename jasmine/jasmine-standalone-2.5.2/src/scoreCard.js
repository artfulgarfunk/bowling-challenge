'use strict';

function scoreCard () {
  this.totalScore = 0;
  this.frames = []
  this.spareBonus = false
  this.strikeBonus = false
  this.strikeBonus1 = false
  this.currentFrame = []
};

scoreCard.prototype.addBowl = function(bowl) {
    this.addToScore(bowl.pins)
    this.strikeBonusUpdate(bowl.pins)
    this.addBowlScore(bowl.pins)

}

scoreCard.prototype.addBowlScore = function(bowlscore) {
  if (this.currentFrame.length === 1 || bowlscore === 10) {
    this.currentFrame.push(bowlscore);
    this.frames.push(this.currentFrame);
    this.spareBonusUpdate(this.currentFrame[0],this.currentFrame[1])
    this.currentFrame = []
    }
  else {
    this.currentFrame.push(bowlscore);
  };
}

scoreCard.prototype.addToScore = function(pins) {
  if (this.strikeBonus === true) {
      this.totalScore += pins*2
      this.strikeBonus = false
      this.strikeBonus1 = true
    }
  else if (this.spareBonus === true || this.strikeBonus1 === true) {
      this.totalScore += pins*2
      this.spareBonus = false
      this.strikeBonus1 = false
  } else {
      this.totalScore += pins
    }
}

scoreCard.prototype.spareBonusUpdate = function(pins1,pins2) {
    if (pins1 + pins2 === 10)
      this.spareBonus = true
    else {
      this.spareBonus = false
    }
}

scoreCard.prototype.strikeBonusUpdate = function(pins) {
  if (pins === 10) {
    this.strikeBonus = true
  } else { this.strikeBonus = false}
}
