function isIsogram(str){
    const count = {}
    const arr = str.toLowerCase().split('')
    arr.forEach(el => {
      count[el] = count[el] ? count[el] + 1 : 1
    })
    const values = Object.values(count)
    return values.every(el => el === 1)
  }