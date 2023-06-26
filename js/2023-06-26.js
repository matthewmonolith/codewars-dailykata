function sumDigits(number) {
    let split = number.toString().split('')
    if(split[0] === '-'){
      split.splice(0,1)
    }
      const nums = split.map((el => Number(el)))
      return nums.reduce((acc, c) => acc+c)
    }
    