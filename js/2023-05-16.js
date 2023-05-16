// 6 kyu
// Find the unique number
function findUniq(arr) {
    let filt = arr.filter((a,i,w) => {
      if(w.indexOf(a) == w.lastIndexOf(a)){
        return a
      }
    })
    return filt[0]
  }