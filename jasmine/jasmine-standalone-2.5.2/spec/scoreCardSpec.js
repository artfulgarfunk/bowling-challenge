'use strict';

describe('Feature Tests', function(){

  var scorecard;
  var bowl;
  var bowl2;
  var bowl3;
  var bowl4;
  var bowl5;
  var bowl6;

  beforeEach(function(){
    scorecard = new scoreCard();
    bowl = new Bowl();
    bowl2 = new Bowl();
    bowl3 = new Bowl();
    bowl4 = new Bowl();
    bowl5 = new Bowl();
    bowl6 = new Bowl();
  });

  describe('is expected to', function(){
    it('start at a score of zero', function(){
      expect(scorecard.totalScore).toBe(0)
    });

    it('adds the total pins knocked in two bowls to the total score', function(){
      bowl.turn(5)
      scorecard.addBowl(bowl)
      bowl2.turn(4)
      scorecard.addBowl(bowl2)
      expect(scorecard.totalScore).toEqual(9)
    });

    it('stores every pair of bowls as a frame', function(){
      bowl.turn(0)
      scorecard.addBowl(bowl)
      bowl2.turn(10)
      scorecard.addBowl(bowl2)
      bowl3.turn(3)
      scorecard.addBowl(bowl3)
      bowl4.turn(3)
      scorecard.addBowl(bowl4)
      bowl5.turn(10)
      scorecard.addBowl(bowl5)
      expect(scorecard.frames[0]).toEqual([0,10])
      expect(scorecard.frames[1]).toEqual([3,3])
      expect(scorecard.frames[2]).toEqual([10])
    });

    it('activate the Spare Bonus when the player get a spare', function(){
      bowl.turn(5)
      scorecard.addBowl(bowl)
      bowl2.turn(5)
      scorecard.addBowl(bowl2)
      expect(scorecard.spareBonus).toBe(true)
    });

    it('add double the score of the next bowl after a spare', function() {
      bowl.turn(5)
      scorecard.addBowl(bowl)
      bowl2.turn(5)
      scorecard.addBowl(bowl2)
      expect(scorecard.totalScore).toBe(10)
      expect(scorecard.spareBonus).toBe(true)
      bowl3.turn(4)
      scorecard.addBowl(bowl3)
      bowl4.turn(3)
      scorecard.addBowl(bowl4)
      expect(scorecard.totalScore).toEqual(21);
    });

     it('add double the score of the next 2 bowls after a strike on the second bowl', function() {
       bowl.turn(10)
       scorecard.addBowl(bowl)
       expect(scorecard.strikeBonus).toBe(true)
       bowl2.turn(5)
       scorecard.addBowl(bowl2)
      //  bowl3.turn(4)
      //  scorecard.addBowl(bowl3)
       expect(scorecard.strikeBonus).toBe(false)
      //  expect(scorecard.totalScore).toEqual(28)
     });

  });
});
    // it('have an array of the number of pins knocked down', function(){
    //   expect(scorecard.frames).toEqual([])
    // });
    //

    // it('add the number of pins knocked down to the players total score', function(){
    //   scorecard.addBowl(5,2)
    //   expect(scorecard.totalScore).toEqual(7)
    // });
    //
    // it('record the number of pins knocked down as pair of scores in a new frame array', function() {
    //   scorecard.addBowl(5,2)
    //   expect(scorecard.frames[0][0]).toEqual(5)
    //   expect(scorecard.frames[0][1]).toEqual(2)
    // });
    //
    //
    // it('deactivate the Spare Bonus when the player does not get a spare', function(){
    //   scorecard.addBowl(4,5)
    //   expect(scorecard.spareBonus).toBe(false)
    // });
    //

    //
