function Hangman(userInput) {
  this.userInput = userInput
}

Hangman.prototype.randomWord = function() {
  var words = ["cat", "harse", "pag"];
  var rand = words[Math.floor(Math.random() * words.length)];
  return rand;
}

Hangman.prototype.replaceBlanks = function() {
  var array = [];
  var rand = this.randomWord();
  for(var i=0; i < rand.length; i++){
      array.push("-");
  }
return array;
}

Hangman.prototype.replaceLetters = function() {
  var userInput = "a"; // this obviously isnt user input
  var wordToBeReturned = "";
  //replace blanks when the user correcly enters a letter
  var userInput = userInput.split("");
  var rand = /*randomWord();*/ "cat";
  rand = rand.split("");

  for (var i = 0; i < rand.length; i++) {
      if (rand[i] === userInput[0]) {
        wordToBeReturned += rand[i];
    } else {
      wordToBeReturned += '-';
    }
  }
  return wordToBeReturned;
}
