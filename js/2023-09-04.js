function circleArea(radius) {
    if(radius > 0){
      return  Math.PI * (radius * radius)
    }else {
      throw new Error
    }
  }