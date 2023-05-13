function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }

  

// The condition in the anonymous function checks if the current value val occurs more than once in the array arr. It does this by checking if the index of the current value is not equal to its last index (i.e., it occurs more than once), and that its last index is equal to the current index (i.e., it is the last occurrence of that value in the array).
// .length returns the number of elements in the filtered array, which corresponds to the number of characters that occur more than once in the original string.
// For example, if the input string is "Hello, world!", the function would return 3, because the characters 'l', 'o', and ' ' occur more than once in the string.