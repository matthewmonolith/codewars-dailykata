var number = function(busStops){
    let left = 0
    for(let i = 0; i < busStops.length;i++){
      left+=busStops[i][0]
      left-=busStops[i][1]
    }
    return left
  }


  function longest(sentence){
    const arr = sentence.split(' ')
    let longest = arr[0];
    for(let i = 0; i < arr.length; i++){
        arr[i].length > longest.length ? longest = arr[i] : longest
    }
    return longest
  }

 console.log(longest('Hi my name is Constantine'))