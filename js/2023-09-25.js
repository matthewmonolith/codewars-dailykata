function digitize(n) {
    return String(n).split('').reverse().map(el => Number(el))
  }