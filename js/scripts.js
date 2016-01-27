function randomWord() {
  var words = ["cat", "harse", "pag"];
  var rand = words[Math.floor(Math.random() * words.length)];
  return rand;
}

function replaceBlanks() {
  var array = [];
  var rand = randomWord();
  for(var i=0; i < rand.length; i++){
      array.push("-");
  }
return array;
}

function replaceLetters () {
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





// the user is putting in a letter:
// that letter is compared to the randomly selected word:
// the random word needs to be split into an array full of ["c", "a", "t"]:
// if the user input("LETTER") ===  "c" || "a" || "t"
// then return that letter and all other instances of that letter
