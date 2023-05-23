// 6 kyu
// Find the odd int
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let count = {};
    A.forEach(v => {
      count[v] = count[v] ? count[v] + 1 : 1;
    });
    return +Object.keys(count).find(key => count[key] % 2 === 1);
  }

//   It declares an empty object called count to store the count of each element in the array.
// It uses the forEach method to iterate over each element v in the array A.
// For each element v, it checks if the count object already has a property with the value v. If it does, it increments the count by 1; otherwise, it initializes the count to 1.
// After counting the occurrences of each element in the array, it uses Object.keys(count) to get an array of all the keys (values from the original array) in the count object.
// It uses the find method on the array of keys to find the first key for which the count is odd (count[key] % 2 === 1).
// The + operator is used to convert the found key from a string to a number and returns it as the result of the function.