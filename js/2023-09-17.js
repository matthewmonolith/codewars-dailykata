var FilterNumbers = function(str) {
    return str.split('').filter(c => !parseFloat(c) && c !== '0').join('');
  }