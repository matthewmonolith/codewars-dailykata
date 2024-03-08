function differenceOfSquares(x){
    var sum = 0, squareSum = 0, i;
    for (i =1 ; i <= x; i++) {
      sum += i*i;
      squareSum += i;
    }
    return squareSum*squareSum - sum;
  }