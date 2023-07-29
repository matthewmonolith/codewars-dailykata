function generateHashtag (str) {
    const strippedString = str.replace(/\s/g, '');
    if(strippedString.length === 0){
      return false
    }
  
    let arr = str.split(' ')
    arr.unshift('#')
    for(let i = 1; i < arr.length; i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    
    if(arr.join('').length > 140){
      return false
    }else {
      return arr.join('')
    }
  }