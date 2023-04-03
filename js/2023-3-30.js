function squareDigits(num){
    return Number(num.toString().split('').map(element => element*element).join(''))
  }