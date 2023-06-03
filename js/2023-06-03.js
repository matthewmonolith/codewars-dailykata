function eliminateUnsetBits(number) {
    const result = []
    const numbers = number.split('').filter(el => el === '1').map(element => Number(element))
    if(numbers.length === 0){
      return 0
    }
    for(let i = 0; i < numbers.length; i++){
      result.push(2**i)
    }
    return result.reduce((acc,c) => acc + c)
  }