// function highAndLow(numbers){
//     let sorted = numbers.split(' ').map(el => Number(el)).sort((a,b) => b-a)
//     const highestLowest = sorted[0].toString() + ' ' + sorted[sorted.length-1].toString()
//     return highestLowest
//   }

  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }