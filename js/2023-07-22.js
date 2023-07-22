function twoArePositive(a, b, c) {
  let arr = [a,b,c]
  return arr.filter(el => el > 0).length === 2 ? true: false
}