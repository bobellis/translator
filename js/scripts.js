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
    if word.includes("qu")

    else
    lettersArray = word.split("");
    cloneLettersArray = lettersArray.slice();

    for(var i = 0; i < lettersArray.length; i++){

      if (isVowel(lettersArray[i])){
        if (lettersArray[i] === "u" && lettersArray[i-1] === "q"){
          sub = lettersArray.slice(0,i);
          sub = sub.join("") +"ay";
          cloneLettersArray.splice(0,i);
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

//   else
//     concatString.push(lettersArray[i])
//     lettersArray.shift()
//   }
//
//
//
// }
//
//
// else if(isConsonant(lettersArray[0])) {
//
//   firstLetter = lettersArray.shift();
//   changeLetter = firstLetter.concat("ay");
//   lettersArray.push(changeLetter);
//   var returnWord = lettersArray.join("");
//   returnString.push(returnWord);
//   returnWord = "";
// }
//
// else{
//   word = word.concat('ay');
//   returnString.push(word)
//}
