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
      expect(scorecard.pins).toEqual([])
    });

    it('record the number of pins knocked down in each bowl', function(){
      scorecard.bowl(5)
      scorecard.bowl(2)
      expect(scorecard.pins[0]).toEqual(5)
      expect(scorecard.pins[1]).toEqual(2)
    })
  });
})
