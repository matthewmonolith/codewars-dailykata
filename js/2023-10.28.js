String.prototype.isUpperCase = function() {
    return this.split('').every(el => el.toUpperCase() === el)
   }