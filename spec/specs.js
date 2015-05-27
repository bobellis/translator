describe('translator', function(){
  it('will give back the same word if it starts with a vowel', function(){
    expect(translator("apple")).to.equal("appleay")
  });

  it('will move the first consonant of a word to the end and add ay', function(){
    expect(translator("dog")).to.equal("ogday")
  });

  it('will move the frist consonant of a word to the end for multiple words', function(){
    expect(translator("dog eat dog")).to.equal("ogday eatay ogday")
  });
});
