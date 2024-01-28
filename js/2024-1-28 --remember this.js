function wordsToMarks(string){
    const alphabetArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
    let res = 0
    const arr = string.split('')
    for(let i = 0; i < arr.length; i++){
      res = res + alphabetArray.indexOf(arr[i]) + 1
    }
    return res
  }