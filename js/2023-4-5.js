
function consecutive(arr) {
    const sorted = arr.sort(function(a, b) {return a-b;});
    let count = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
      let diff = sorted[i+1] - sorted[i]
      if (diff > 1) {
        count += diff - 1
      }  
    }
    return count;
  }