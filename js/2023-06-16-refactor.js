// function createPhoneNumber(numbers){
//     const area = numbers.splice(0,3).join('')
//     const partOne = numbers.splice(0,3).join('')
//     const partTwo = numbers.splice(0,4).join('')
//     return `(${area}) ${partOne}-${partTwo}`
//   }

  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }