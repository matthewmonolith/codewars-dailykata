function divCon(x) {
    const sumNumbers = x.filter(num => typeof num === 'number').reduce((acc, c) => acc + c, 0);
    
    const sumStrings = x.filter(num => typeof num === 'string').map(num => parseInt(num)).reduce((acc, c) => acc + c, 0);
    
    return sumNumbers - sumStrings;
  }