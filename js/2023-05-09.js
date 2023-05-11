// 6 kyu
// Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }


  

// then applies the `map` method to each character in the array, which checks if the index of the first occurrence of the character in the array is the same as the index of the last occurrence of the character in the array.

// If the character occurs only once in the array, it returns a `(`, otherwise it returns `)` for characters that occur more than once. 

// In other words, this function is encoding the string by replacing each character with a `(` if it appears only once, and with a `)` if it appears more than once. This encoding scheme is called "duplicate encoding" because it distinguishes between characters that are duplicated and those that are not.

