describe('randomWord', function() {
  it("select a random word from an array", function () {
  expect(randomWord("cat")).to.be.a('string');
  });
});

describe('replaceBlanks', function() {
  it("replace the letters in the word with one blank for each letter", function() {
    expect(replaceBlanks("cat")).to.eql(["-", "-", "-"]);
  });
});

describe('replaceLetters', function() {
  it("replace the blanks when the user correcly enters a letter", function() {
    expect(replaceLetters("a")).to.equal("-a-");
  });
});
