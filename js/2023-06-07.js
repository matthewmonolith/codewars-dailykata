function toAcronym(inp){
    const arr = inp.split(' ')
    let sentence = []
    for(let i = 0; i < arr.length; i++){
      sentence.push(arr[i][0])
    }
    return sentence.join('').toUpperCase()
  }


  function toAcronym( input ){
    return input.split(' ')
                .map(function(item) {
                   return item[0].toUpperCase();
                })
                .join('');
  }