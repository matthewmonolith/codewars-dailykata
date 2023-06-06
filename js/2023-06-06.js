function noIfsNoButs(a, b) {
    while(a > b){
      return `${a} is greater than ${b}`
      break
    }
    while(a < b){
      return `${a} is smaller than ${b}`
      break
    }
    while(a === b){
      return `${a} is equal to ${b}`
      break
    }
  }