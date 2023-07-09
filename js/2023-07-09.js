function getAverage(marks){
    return Math.floor(marks.reduce((acc,c) => acc+c, 0)/marks.length)
  }