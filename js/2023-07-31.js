function printerError(s) {
    const arr = s.split('')
    const lowercaseArray = Array.from({length: 14}, (_, index) => String.fromCharCode(110 + index));
    let count = 0
    arr.forEach(el => lowercaseArray.includes(el) ? count+=1 : count+=0)
    return `${count}/${arr.length}`
  }