function longest(sentence){
    const arr = sentence.split(' ')
    let longest = arr[0];
    for(let i = 0; i < arr.length; i++){
        arr[i].length > longest.length ? longest = arr[i] : longest
    }
    return longest
  }

 console.log(longest('Hi my name is Constantine'))