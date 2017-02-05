describe('scoreCard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new scoreCard();
  });

  describe('is expected to', function(){
    it('start at a score of zero', function(){
      expect(scorecard.score).toBe(0)
    });
  });
})
