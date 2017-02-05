describe('scoreCard', function(){

  var scorecard;
  var bowl;

  beforeEach(function(){
    scorecard = new scoreCard();
    bowl = new Bowl();
  });

  describe('is expected to', function(){
    it('start at a score of zero', function(){
      expect(scorecard.totalScore).toBe(0)
    });

    it('have an array of the number of pins knocked down', function(){
      expect(scorecard.frames).toEqual([])
    });

    // it('record the number of pins knocked down in each addBowl', function(){
    //   scorecard.addBowl(5)
    //   scorecard.addBowl(2)
    //   expect(scorecard.pins[0]).toEqual(5)
    //   expect(scorecard.pins[1]).toEqual(2)
    // });

    it('add the number of pins knocked down to the players total score', function(){
      scorecard.addBowl(5,2)
      expect(scorecard.totalScore).toEqual(7)
    });

    it('record the number of pins knocked down as pair of scores in a new frame array', function() {
      scorecard.addBowl(5,2)
      expect(scorecard.frames[0][0]).toEqual(5)
      expect(scorecard.frames[0][1]).toEqual(2)
    });

    it('activate the Spare Bonus when the player get a spare', function(){
      scorecard.addBowl(5,5)
      expect(scorecard.spareBonus).toBe(true)
    });

    it('deactivate the Spare Bonus when the player does not get a spare', function(){
      scorecard.addBowl(4,5)
      expect(scorecard.spareBonus).toBe(false)
    });

    it('add double the score of the next bowl after a spare', function() {
      scorecard.addBowl(5,5)
      expect(scorecard.spareBonus).toBe(true)
      expect(scorecard.totalScore).toBe(10)
      scorecard.addBowl(4,5)
      expect(scorecard.totalScore).toEqual(23);
    });

     it('add double the score of the next 2 bowls after a strike on the second bowl', function() {
       scorecard.addBowl(0,10)
       expect(scorecard.spareBonus).toBe(false)
       expect(scorecard.strikeBonus).toBe(true)
       scorecard.addBowl(5,5)
       expect(scorecard.totalScore).toEqual(30)
       scorecard.addBowl(5,4)
       expect(scorecard.totalScore).toEqual(44)

     });

  });
})
