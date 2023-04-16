// 6 kyu
// Two Sum

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

//we have our typical array loop that goes over the array, but in that, each time the first loop runs the nested loop will go over the loop one number ahead of i's current position/iteration. If the current position of i and where j is match target you can just return an array of the two indices 
