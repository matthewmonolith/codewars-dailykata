function duplicateEncode(word){
    return word.toLowerCase().split('').map((el,i, a) => a.indexOf(el) === a.lastIndexOf(el) ? "(" : ")" ).join('')
 }
 