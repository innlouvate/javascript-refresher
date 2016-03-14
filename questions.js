// var firstLetter = function(word, letter) {
//   return word.startsWith(letter);
// }

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
  return array.slice(0,6);
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
  return Object.keys(object)                //get the keys as an array
    // .filter(o.hasOwnProperty.bind(example)) //safety check (optional)
    .reduce(function(newObj, key) {                  //build up new object
        newObj[object[key]] = key;
        return newObj;
    }, {});
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
