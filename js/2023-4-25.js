//7kyu return true is the count of x is the same as o in the string

function XO(str) {
    let x = 0
    let o = 0
    let newArr = str.split('').forEach(element => {
      if(element === 'x' || element === 'X'){
        x++
      }else if (element === 'o' || element === 'O'){
        o++
      }
    })
    if(o === x){
        return true
    }else {
        return false
    }
  }