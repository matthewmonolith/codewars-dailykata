function validatePIN (pin) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if((pin.split('').every(el => numbers.includes(el)) && pin.length === 4) || (pin.split('').every(el => numbers.includes(el)) && pin.length === 6)){
      return true
    }else {
      return false
    }
  }