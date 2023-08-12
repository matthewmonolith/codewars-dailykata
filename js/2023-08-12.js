function dropCap(n) {
    const arr = n.split(' ')
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > 2){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase() 
      }
    }
    return arr.join(' ')
  }