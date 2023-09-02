function matrixAddition(a, b){
    const res = []
    for(let i = 0; i < a.length; i++){
      let currLength = a[i].length
      let curr = []
      for(let j = 0; j < currLength; j++){
        curr.push(a[i][j] + b[i][j])
      }
      res.push(curr)
    }
    return res
  }