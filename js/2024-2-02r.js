function filterRange(arr, a, b){
  return arr.filter((el, i) => {
    return el >= a && el <= b
  })
}
