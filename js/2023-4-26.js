//8kyu, US to EU flooring

// function getRealFloor(n) {
//     if(n > 13){
//       return n -= 2;
//     }else if (n >= 1){
//       return n-=1
//     }else {
//       return n
//     }
//   }

  function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
  }