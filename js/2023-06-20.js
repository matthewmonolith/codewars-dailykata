function fakeBin(x){
    return x.split('').map(el => Number(el) < 5 ? '0': '1').join('')
    }