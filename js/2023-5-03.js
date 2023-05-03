//7kyu vowel count
function getCount(str) {
    let arr = str.split('')
    return arr.filter(c => ['a','e','i','o','u'].includes(c)).length
  }