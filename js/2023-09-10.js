function solve(s){
    let upper = 0
    let lower = 0
      for(let i = 0; i < s.length; i++){
        s[i] === s[i].toUpperCase() ? upper+=1 : lower+=1
      }
    if(upper > lower){
      return s.toUpperCase()
    }else if (upper < lower || upper === lower){
      return s.toLowerCase()
    }
  }