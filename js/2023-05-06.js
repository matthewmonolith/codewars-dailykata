//7 kyu Find the middle element
//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme (triplet) {
    return triplet.indexOf(triplet.concat().sort((a,b) => a-b)[1])
   }

//a.concat() creates a copy of the input array a.
// sort(function(a, b) { return a - b }) sorts the copied array in ascending order using a compare function.
// [1] gets the second element of the sorted array, which is the middle element in the case of odd-length arrays.
// a.indexOf() returns the index of the middle element in the original input array a.
// Note that this function assumes that the input array a has at least three distinct elements, otherwise the result may not be valid.
//In this example, the input array [2, 3, 1] is sorted to [1, 2, 3], and the middle element is 2, which is located at index 0 in the original array. Therefore, the output is 0.