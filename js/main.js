//7 kyu Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let newArray = str.split(' ');
    let reversedWords = newArray.map (element => element.split("").reverse().join(""))
    return reversedWords.join(' ')
  }
