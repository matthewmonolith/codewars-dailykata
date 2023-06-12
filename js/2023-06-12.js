function count(string) {
    const arr = string.split('')
    let obj = {}
    arr.forEach(el => {
      obj[el] = obj[el] ? obj[el] + 1 : 1;
    })
    return obj
  }
  