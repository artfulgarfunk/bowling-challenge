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

    if (this.currentFrame.length === 1 || bowl.pins === 10) {
      this.currentFrame.push(bowl.pins);
      this.frames.push(this.currentFrame);
      this.spareBonusUpdate(this.currentFrame[0],this.currentFrame[1])
      this.currentFrame = []
      }
    else {
      this.currentFrame.push(bowl.pins);
      this.spareBonusUpdate(this.currentFrame[0],this.currentFrame[1])
    };
}

scoreCard.prototype.addToScore = function(pins) {
  if (this.spareBonus === true) {
      this.totalScore += pins*2
      this.spareBonus === false
    } else {
      this.totalScore += pins
    }
// this.BonusUpdate(pins1,pins2)
}


scoreCard.prototype.spareBonusUpdate = function(pins1,pins2) {
    if (pins1 + pins2 === 10)
      this.spareBonus = true
    else {
      this.spareBonus = false
    }
}

//
// //     if (this.strikeBonus === true) {
// //       this.addToScore(pins1,pins2)
// //       this.addToScore(pins1,pins2)
// //       this.strikeBonus1 = true
// //     } else if (this.spareBonus === true)
// //       { this.totalScore += pins1
// //         this.addToScore(pins1,pins2)
// //     } else {
// //       this.addToScore(pins1,pins2)
// //    };
// //    this.currentFrame = []
// // };
//
// // keep all this logic and run it on each frame?
// scoreCard.prototype.BonusUpdate = function(pins1, pins2) {
//   if (pins1 === 10 || pins2 === 10) {
//     this.strikeBonus = true
//     this.spareBonus = false
//     this.strikeBonus1 = false
// } else if (pins1 + pins2 >= 10)
//     {this.spareBonus = true
//     this.strikeBonus = false
//     this.strikeBonus1 = false}
//   else {
//     this.spareBonus = false
//   };
// }
//
