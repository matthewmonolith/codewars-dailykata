function transposeTwoStrings(arr){
    var result = [];
    var len = Math.max(arr[0].length, arr[1].length);
    
    for (var i = 0; i < len; i++) {
      var column = (arr[0][i] || " ") + " " + (arr[1][i] || " ");
      result.push(column);
    }
    
    return result.join("\n");
  }