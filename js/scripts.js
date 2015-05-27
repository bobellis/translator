var translator = function(string){


  var splitString = string.split(" ");
  var firstLetter;
  var changeLetter;
  var lettersArray = []

  var returnString = [];

  splitString.forEach(function(word) {
    lettersArray = word.split("");
    if(isConsonant(lettersArray[0])) {

      firstLetter = lettersArray.shift();
      changeLetter = firstLetter.concat("ay");
      lettersArray.push(changeLetter);
      var returnWord = lettersArray.join("");
      returnString.push(returnWord);
      returnWord = "";
    }

    else{
      word = word.concat('ay');
      returnString.push(word)
      }
  });



    return returnString.join(" ");


};


var isConsonant = function(letter){
  var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  var e = 0;
  var b = false;
  for(var i = 0; i < consonants.length; i++) {

    if(consonants[i] === letter) {
        b = true;
      }

    }

  return b;
};
