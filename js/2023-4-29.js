//7kyu, return middle char if an odd length string, else return middle two
function getMiddle(s){
  let middle = Math.floor(s.length/2)
  return s.length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle]
}