var translator = function(string){


  var splitString = string.split(" ");
  var firstLetter;
  var changeLetter;
  var lettersArray = [];
  var vowelPosition;
  var cloneLettersArray = [];
  var returnString = [];
  var sub;
  var newWord;



  splitString.forEach(function(word) {

    lettersArray = word.split("");
    cloneLettersArray = lettersArray.slice();

    for(var i = 0; i < lettersArray.length; i++){

      if (isVowel(lettersArray[i])){
        if ((lettersArray[i] === "u") && (lettersArray[i-1] === "q")){
          sub = lettersArray.slice(0, i + 1);
          sub = sub.join("") +"ay";
          cloneLettersArray.splice(0, i + 1);
          cloneLettersArray.push(sub);
          newWord = cloneLettersArray.join("");
          returnString.push(newWord);
          break;
        } else {
            sub = lettersArray.slice(0,i);
            sub = sub.join("") +"ay";
            cloneLettersArray.splice(0,i);
            cloneLettersArray.push(sub);
            newWord = cloneLettersArray.join("");
            returnString.push(newWord);
            break;
          }
        }

    }

  });
  return returnString.join(" ");
};



var isVowel = function(letter){
  var vowels = ["a","e","i","o","u"];
  var e = 0;
  var b = false;
  for(var i = 0; i < vowels.length; i++) {

    if(vowels[i] === letter) {
        b = true;
      }

    }

  return b;
};

$(document).ready(function() {
  $("form#translateform").submit(function(event) {

    var text = $("input#inputstring").val();
    var result = translator(text);

    $('.translation').text(result);

    $('#translation').show();

    event.preventDefault();
  });
});
