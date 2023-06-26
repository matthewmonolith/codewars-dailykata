const dominator = arr => {
   let count  = {};
   arr.forEach(el => {
     count[el] ? count[el]++ : count[el] = 1;
   })
   for (let k in count) {
     if (count[k] > arr.length/2) return +k
   }
   return -1;
}

[1,2,3,3,3,5]