function findHack(arr) {
    let score = {
      A: 30,
      B: 20,
      C: 10,
      D: 5
    }
    function calc(a){
      let bonus = (a.length >= 5 && a.every(g => g == 'A' || g == 'B')) ? 20 : 0;
      return a.map(g => score[g] || 0).reduce((a,b)=>a+b,0)+bonus;
    }
    return arr.filter(a => {
      return a[1] > 200 || calc(a[2]) !== a[1];
    }).map(a => a[0]); 
  }

//score locked in as an object, and we lock in a function calc, to call later, takes in one param
//bonus variable calculated from ternary operator's evaluation of as long as whatever is passed in the function has a length of 5 or above and passes the every method where all elements have to be A or B, which rewards 20 points or 0
//function then returns a map of the array, ie ABBA where each element passed in, ie A is evaluated from the score's property, so score[A] will be 30, if none are found, ie F, then it's 0, from that map (30,20,20,30) made we reduce it to 100
//outside of that we have a filter method, takes in an array and filters based on if the score ie 440 is greater than 200 or it passes in the array of grades from the current element and if it doesn't match that score 440 then it's included into the filter, we then just map those filtered elements to the names of the elements