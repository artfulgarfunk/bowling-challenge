describe('scoreCard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new scoreCard();
  });

  describe('is expected to', function(){
    it('start at a score of zero', function(){
      expect(scorecard.score).toBe(0)
    });

    it('have an array of the number of pins knocked down', function(){
      expect(scorecard.frames).toEqual([])
    });

    // it('record the number of pins knocked down in each bowl', function(){
    //   scorecard.bowl(5)
    //   scorecard.bowl(2)
    //   expect(scorecard.pins[0]).toEqual(5)
    //   expect(scorecard.pins[1]).toEqual(2)
    // });

    it('add the number of pins knocked down to the players total score', function(){
      scorecard.bowl(5,2)
      expect(scorecard.score).toEqual(7)
    });

    it('record the number of pins knocked down as pair of scores in a new frame array', function() {
      scorecard.bowl(5,2)
      expect(scorecard.frames[0][0]).toEqual(5)
      expect(scorecard.frames[0][1]).toEqual(2)
    });

    it('activate the Spare Bonus when the player get a spare', function(){
      scorecard.bowl(5,5)
      expect(scorecard.spareBonus).toBe(true)
    });

    it('deactivate the Spare Bonus when the player does not get a spare', function(){
      scorecard.bowl(4,5)
      expect(scorecard.spareBonus).toBe(false)
    });

    it('add double the score of the next bowl after a spare', function() {
      scorecard.bowl(5,5)
      expect(scorecard.spareBonus).toBe(true)
      expect(scorecard.score).toBe(10)
      scorecard.bowl(4,5)
      expect(scorecard.score).toEqual(23);
    });

     it('add double the score of the next 2 bowls after a strike', function() {
       scorecard.bowl(0,10)
       expect(scorecard.spareBonus).toBe(false)
       expect(scorecard.strikeBonus).toBe(true)
       scorecard.bowl(5,5)
       expect(scorecard.score).toEqual(30)
       scorecard.bowl(5,4)
       expect(scorecard.score).toEqual(44)
     })

  });
})
