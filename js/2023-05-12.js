function alphabetPosition(text) {
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
  return text.toUpperCase().replace(/[^a-zA-Z]+/g, '').split('').map((c,i,w) => alphabet.indexOf(c)+1).join(' ')
}


// function alphabetPosition(text) {
//   var result = "";
//   for (var i = 0; i < text.length; i++){
//     var code = text.toUpperCase().charCodeAt(i)
//     if (code > 64 && code < 91) result += (code - 64) + " ";
//   }

//   return result.slice(0, result.length-1);
// }