function distinct(a) {
    return a.filter((el,i,a) => a.indexOf(el) === i)
  }