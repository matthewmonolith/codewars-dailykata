function camelize(str){
    let lower = str.toLowerCase()
    lower = lower.split(/[^a-zA-Z0-9]+/);
     for(let i = 0; i < lower.length; i++){
       lower[i] = lower[i].charAt(0).toUpperCase() + lower[i].slice(1)
     }
     return lower.join('')
   }