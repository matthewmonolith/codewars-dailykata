var uniqueInOrder=function(iterable){
  let curr
  const res = []
  for(let i = 0; i < iterable.length; i++){
    if(curr !== iterable[i]){
      res.push(iterable[i])
      curr = iterable[i]
    }else{
      continue
    }
  }
  return res
}

const arr = uniqueInOrder('A')
console.log(arr)