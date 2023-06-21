function fireFight(s){
    const action = "~~"
    let arr = s.split(' ')
    for(let i = 0; i < arr.length;i++){
      if(arr[i] === "Fire"){
        arr[i] = action
      }
    }
    return arr.join(' ')
  }