var selectElementsStartingWithA = function(array) {
  return array.filter(function(item, index) {
    return item.charAt(0) === 'a';
  });
}

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(item, index) {
    return (/^[aeiou]$/i).test(item.charAt(0));
  });
}

var removeNullElements = function(array) {
  return array.filter(function(n){ return n != undefined });
}

var removeNullAndFalseElements = function(array) {
  return array.filter(function(n){ return n != undefined && n !== false });
}

var reverseWordsInArray = function(array) {
  return array.map(function(x) { return x.split('').reverse().join('')})
}

var everyPossiblePair = function(array) {
  newArray = [];
  array = array.sort();
  for(var n=0; n< array.length; n++) {
    for(var i=n+1; i<array.length; i++) { newArray.push([array[n], array[i] ])}
  }
  return newArray;
}

var allElementsExceptFirstThree = function(array) {
  return array.filter(function(item, index) {
    if(index > 2) {
      return item;
    }
  });
}

var addElementToBeginning = function(array, element) {
  array.splice(0,0, element);
  return array;
}

var sortByLastLetter = function(array) {
  return array.sort(function(a, b){
    if(a.charAt(a.length-1) < b.charAt(b.length-1)) return -1;
    if(a.charAt(a.length-1) > b.charAt(b.length-1)) return 1;
    return 0;
  });
}

var getFirstHalf = function(string) {
  return string.slice(0, Math.ceil(string.length/2));
}
var getLastHalf = function(string) {
  return string.slice(Math.floor(string.length/2), string.length);
}

var makeNegative = function(number) {
  return Math.abs(number) *(-1);
}

var numberOfPalindromes = function(array) {
  return array.filter(function(word) {
    return getFirstHalf(word)===((getLastHalf(word)).split('').reverse().join(''))
  }).length
}

var shortestWord = function(array) {
  return array.sort(function(a,b) { return a.length > b.length } )[0];
}

var longestWord = function(array) {
  return array.sort(function(a,b) { return a.length < b.length } )[0];
}

var sumNumbers = function(array) {
  return array.reduce(function(total, num) { return total += num });
}

var repeatElements = function(array) {
  return array.concat(array);
}

var removeDuplicateElements = function(array) {
  return array.filter(function(item, index) { return array.indexOf(item) == index });
}

var stringToNumber = function(string) {
  return parseInt(string);
}

var calculateAverage = function(array) {
  return sumNumbers(array) / array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
  result = [];
  for (var i=0; i < array.length; i++) {
    if (array[i] > 5) {
      break;
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

var convertArrayToObject = function(array) {
  var keyselect = array.filter(function(item, index) { return index%2===0})
  return keyselect.reduce(function(result, item) {
    result[item] = array[array.indexOf(item)+1];
    return result;
  }, {});
}

var removeDuplicateCharacters = function(string) {
  return string.split('').filter(function(item, index, array) {
    return array.indexOf(item) == index
  }).join('');
}

var getAllLetters = function(array) {
  return removeDuplicateCharacters(array.join('')).split('').sort();
}

var swapKeysAndValues = function(object) {
  return Object.keys(object)
    .reduce(function(newObj, key) {
        newObj[object[key]] = key;
        return newObj;
    }, {});
}

var sumKeysAndValues = function(object) {
  return Object.keys(object).reduce(function(result, key) {
    return result += (parseInt(key) + parseInt(object[key]))
  }, 0)
}

var removeCapitals = function(string) {
  return string.replace(/[A-Z]/g,'');
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  var day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
  var month = date.getMonth() > 9 ? date.getMonth()+1 : "0" + (date.getMonth()+1);
  var year = date.getFullYear();
  return day+"/"+month+"/"+year;
}

var getDomainName = function(string) {
  return string.slice(string.indexOf('@')+1, string.indexOf('.co'));
}

var titleize = function(string) {
  var words = string.split(' ');
  return words.map(function(word, index) {
    if(word.length > 3 || index === 0 || words[index-1].endsWith('.')) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  }).join(' ');
} // possibly should also filter out certain 4 letter words?

var checkForSpecialCharacters = function(string) {
  return string != string.replace(/[!@£$%^&*(){}:;<>?]/g,'');
}

var squareRoot = function(number, guess) {
  if (!guess) {
    guess = number / 2.0;
  }
  var divisor = number / guess;
  var newGuess = (divisor + guess) / 2.0;
  if (guess == newGuess) {
    return guess;
  }
  return squareRoot(number, newGuess);
}
var easySquareRoot = function(number) {
  return Math.sqrt(number);
}

var factorial = function(number) {
  var sum = 1;
  for(var i=number; i>0; i--) { sum = sum * i }
  return sum;
}

function findAnagrams(start, string) {
  if ( string.length == 1 ) {
    return [ start + string ];
  } else {
    var returnResult = [];
    for (var i=0; i < string.length; i++) {
      var result = findAnagrams(string[i], string.substr(0, i) + string.substr(i+1));
      for (var j=0; j<result.length; j++) {
        returnResult.push(start + result[j]);
      }
    }
    return returnResult;
  }
} // solution worked from stackoverflow, to rewrite

var convertToCelsius = function(number) {
  return Math.round((number - 32) / 1.8);
}

var letterPosition = function(array) {
  return array.map(function(letter) {
    return letter.toLowerCase().charCodeAt(0) - 96;
  });
}
