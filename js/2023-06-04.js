function countPositivesSumNegatives(input) {
    const result = []
  if (input == null || input.length < 1){
    return [];
  }
  else {
      const pos = input.filter(el => el > 0).length
      const count = input.filter(el => el < 0).reduce((acc,c) => acc+c, 0)
      result.push(pos, count)
  }

  return result
}