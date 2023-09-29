function deleteNth(arr, n) {
    const count = {}; // Object to store the count of each element
    const result = []; // Array to store the filtered elements
  
    for (let i = 0; i < arr.length; i++) {
      const curr = arr[i];
      count[curr] = (count[curr] || 0) + 1;
  
      if (count[curr] <= n) {
        result.push(curr);
      }
    }
  
    return result;
  }
  