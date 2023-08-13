var filterString = function(value) {
    const numbers = []
    for(let i = 0; i < value.length; i++){
      if(Number(value[i]) || value[i] === '0'){
        numbers.push(value[i])
      }
    }
    return Number(numbers.join(''))
  }