//array of binary numbers, return the integer conversion
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
  };

//   To convert a binary number to an integer, you can use the following steps:

// Write down the binary number you want to convert.

// Starting from the rightmost digit of the binary number, assign each digit a power of 2, starting with 2^0 = 1 for the rightmost digit, 2^1 = 2 for the second-rightmost digit, 2^2 = 4 for the third-rightmost digit, and so on.

// Multiply each binary digit by its corresponding power of 2.

// Add up the products from step 3 to obtain the integer equivalent of the binary number.

// For example, let's say we want to convert the binary number 1011 to an integer:

// Write down the binary number 1011.

// Starting from the rightmost digit, assign each digit a power of 2: 2^0 = 1 for the rightmost digit, 2^1 = 2 for the second-rightmost digit, 2^2 = 4 for the third-rightmost digit, and 2^3 = 8 for the leftmost digit.

// Multiply each binary digit by its corresponding power of 2: 1 * 1 + 1 * 2 + 0 * 4 + 1 * 8 = 11.

// The integer equivalent of the binary number 1011 is 11.
