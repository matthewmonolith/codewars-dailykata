const sumSquareEvenRootOdd = ns => {
    let result = []
    ns.forEach(num => num % 2 === 0 ? result.push(num**2) : result.push(Math.sqrt(num)))
    return Number(result.reduce((a,b) => a+b).toFixed(2))
  };