//6 kyu Write Number in Expanded Form
//expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

const expandedForm = n => n.toString()  //'12'
                            .split("")  //[1,2]
                            .reverse()  //[2,1]
                            .map( (a, i) => a * Math.pow(10, i)) //2 * Math.pow(10,i) (The Math.pow() static method returns the value of a base raised to a power so 10**i), 10^0 = 1, so 2*1
                            .filter(a => a > 0) 
                            .reverse()
                            .join(" + ");


console.log(expandedForm(12))

// This is a JavaScript function that takes in a number n and returns a string in expanded form. The expanded form of a number breaks down the number into its individual place values and represents it as a sum of those values.

// Here is a step-by-step breakdown of what the code does:

// n.toString(): Converts the input number n to a string.
// .split(""): Splits the string into an array of individual characters.
// .reverse(): Reverses the order of the array so that the least significant digit is first.
// .map( (a, i) => a * Math.pow(10, i)): Maps each digit to a number multiplied by the corresponding power of 10. For example, the first digit (which is the least significant) is multiplied by 10^0, the second digit is multiplied by 10^1, and so on.
// .filter(a => a > 0): Filters out any values that are zero or less. This is done to remove any unnecessary zeros from the expanded form.
// .reverse(): Reverses the order of the array again so that the most significant digit is first.
// .join(" + "): Joins the array elements with a " + " separator to form the final string in expanded form.
// For example, if you pass in the number 1234 to this function, it will return the string "1000 + 200 + 30 + 4", which represents the expanded form of 1234.
