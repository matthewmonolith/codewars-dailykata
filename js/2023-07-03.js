function flattenAndSort(array) {
    let res = []
    for(let i = 0; i < array.length; i++){
      let curr = array[i]
      for(let j = 0; j < curr.length;j++){
        res.push(curr[j])
      }
    }
    return res.sort((a,b) => a-b)
  }