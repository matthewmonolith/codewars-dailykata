// 6 kyu
// Multiplication table
// DESCRIPTION:
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    let r = []
    for(let i = 1; i<=size; i++){
      let x = []
      for(let j = 1; j<=size; j++){
        x.push(i*j)
      }
      r.push(x)
    }
    return r
  }

//   The code you provided defines a function called multiplicationTable that takes a parameter size and returns a multiplication table of that size. Here's a breakdown of how the function works:

// It initializes an empty array r to store the rows of the multiplication table.
// It starts a loop that iterates from 1 to size (inclusive) using the variable i. This loop is responsible for generating each row of the table.
// Inside the first loop, it initializes an empty array x to store the values of the current row.
// It starts another loop that iterates from 1 to size (inclusive) using the variable j. This loop generates the values in the current row.
// Inside the second loop, it calculates the product of i and j and pushes it to the x array.
// Once the inner loop finishes, it pushes the x array (representing the current row) to the r array.
// After the outer loop finishes, it returns the final r array, which represents the entire multiplication table.
// Here's an example of how you can use the multiplicationTable function:

// javascript
// Copy code
// const table = multiplicationTable(5);
// console.log(table);
// Output:

// csharp
// Copy code
// [
//   [1, 2, 3, 4, 5],
//   [2, 4, 6, 8, 10],
//   [3, 6, 9, 12, 15],
//   [4, 8, 12, 16, 20],
//   [5, 10, 15, 20, 25]
// ]
// In this example, calling multiplicationTable(5) generates a 5x5 multiplication table and assigns it to the table variable. The resulting table is then logged to the console.