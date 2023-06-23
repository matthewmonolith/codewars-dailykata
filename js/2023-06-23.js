function duplicate(arr){
    return [...new Set(arr.filter((el, i) => i !== arr.indexOf(el)))]
}





// Here, the filtered array is passed to the Set constructor, which is a built-in JavaScript object that allows you to store unique values. By spreading the filtered array inside new Set(), you create a new Set object with only the unique elements from the filtered array.

// Finally, the spread operator ([...]) is used again to convert the Set object back into an array.