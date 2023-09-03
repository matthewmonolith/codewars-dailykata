function comp(array1, array2) {
    // If either array1 or array2 is null or undefined, return false.
    if (!array1 || !array2) {
      return false;
    }
  
    // Create a copy of array1 and square its elements.
    const squaredArray1 = array1.map((el) => el * el);
  
    // Sort both arrays.
    squaredArray1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
  
    // Compare the sorted arrays for equality.
    return JSON.stringify(squaredArray1) === JSON.stringify(array2);
  }
  