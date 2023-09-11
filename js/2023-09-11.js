function sumMix(x){
    return x.map(el => Number(el)).reduce((acc, c) => acc+c, 0)
  }