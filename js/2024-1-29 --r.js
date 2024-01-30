function sumOfDifferences(arr) {
    // Sort the array in descending order
    const sorted = arr.slice().sort((a, b) => b - a);
    
    // Initialize sum
    let sum = 0;
    
    // Iterate over the sorted array and calculate differences
    for (let i = 0; i < sorted.length - 1; i++) {
      sum += sorted[i] - sorted[i + 1];
    }
    
    return sum;
  }
  