function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
