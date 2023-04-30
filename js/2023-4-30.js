// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
// Examples:
// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]

function lastDigit(n, d) {
    let result = [];    //set up an empty array
    n = n.toString().split(''); //reassign n to an array of each number
    if (d <= 0) {
        return result;
    } else if (d > n.length) {
        n = n.map(Number);              //.map(Number) takes each element of the newly created array and passes it into the Number() function. This is a shortcut way of writing this .map(el => Number(el)), so n is reassigned again to just the full array of numbers, then is reassigned as result
        result = n;
    } else {
        for (let i = d; i > 0; i--) {           //good example of a negative loop iteration, stops once i reaches 0
            result.unshift(Number(n.pop()));    //so each iteration, the last element converted to number from the n array is popped off the end and placed at the START of the result array.
        }
        // n.push(...result);                      //what result is now which is the last digits popped from n is then added to the n array. commenting the statement out still works.
    }
    return result;
}

console.log(lastDigit(34562,9));

