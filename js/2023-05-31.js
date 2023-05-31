//7kyu filters out duplicate values in the array
function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}

//arr.lastIndexOf(val) == i - This condition checks if the current index i is equal to the last index of val in the array. If they are equal, it means that the current occurrence of val is the last occurrence in the array, and therefore it's a unique element.
