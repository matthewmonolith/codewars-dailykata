function sumOfMinimums(arr) {
    let total = 0;
    
    for (let i = 0; i < arr.length; i++){
     total += Math.min(...arr[i])
    }
    
    return total;
  }

  //total += Math.min(arr[i]) didn't work because Math.min expects individual numbers, so to get them out of the array structure you use the spread operator!