function alternate(n, firstValue, secondValue){
    const arr = []
    let curr = firstValue
    for(let i = 0; i < n; i++){
      if(curr === firstValue){
        arr.push(firstValue)
        curr = secondValue
      }else if(curr === secondValue){
        arr.push(secondValue)
        curr=firstValue
      }
    }
    return arr
  }