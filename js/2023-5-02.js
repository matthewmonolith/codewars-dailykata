function persistence(num) { //39
    var times = 0;
    
    num = num.toString();   //make into a string
    
    while (num.length > 1) {    //ends when string is just one digit/char
      times++;                  //each time it runs, times goes up by one
      num = num.split('').map(Number).reduce((a, b) => a * b).toString(); //split into an array, then maps over each element, taking each element as a number which is passed into reduce, which takes current and next value, times them together and changes into a string so the string length can be compared to the while statement
    }
    
    return times; //times then returned at the end when the while stops to see how long it took 

}


