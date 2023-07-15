function arithmeticSequenceElements(a, d, n) {
    const res = [];
    for (let i = 0; i < n; i++) {
      res.push(a + i * d);
    }
    return res.join(", ");
  }