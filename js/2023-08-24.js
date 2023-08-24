var number = function(busStops){
    let left = 0
    for(let i = 0; i < busStops.length;i++){
      left+=busStops[i][0]
      left-=busStops[i][1]
    }
    return left
  }