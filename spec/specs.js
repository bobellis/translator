describe('translator', function(){
  it('will give back the same word if it starts with a vowel', function(){
    expect(translator("apple")).to.equal("appleay")
  });

  it('will move the first consonant of a word to the end and add ay', function(){
    expect(translator("straight")).to.equal("aightstray")
  });

  it('will move the first consonant of a word to the end for multiple words', function(){
    expect(translator("dog eat dog")).to.equal("ogday eatay ogday")
  });

  it('will move the qu at the beginning of a word to the end for multiple words', function(){
    expect(translator("squirrel quite aquire")).to.equal("irrelsquay itequay aquireay")
  });

});
