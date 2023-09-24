function testResult(array) {
    const obj = {
      'h':0,
      'a':0,
      'l':0
    }
    let avg = Number(array.reduce((acc, c) => acc+c)/array.length);
    avg = Number(avg.toFixed(3))
    array.forEach(el => {
      if(el > 9){
        obj.h +=1
      }else if (el > 6){
        obj.a +=1
      }else {
        obj.l +=1
      }
    })
    return array.every(el => el > 8) ? [avg, obj, 'They did well'] :  [avg, obj];
  }