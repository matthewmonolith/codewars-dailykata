function Calculator() { //constructor, so you can create a new instance, ie calcOne

    this.methods = { //calcOne will have a property which is an object of methods that add or subtract, the values of sub and add are methods that takes in a and b and does something with them
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) { //calcOne will have a method called calculate, function that takes in str, splits it into an array, converts the nums into actual nums, finds the operator which it needs to determine which method to call in the methods prop
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b); //equivalent of saying return subtract(a,b), like a standard function call
    };
  
    this.addMethod = function(name, func) { //This function allows adding new methods to the calculator. It takes a name (like * for multiplication) and a function for that operation. It adds this new method to the this.methods object.
      this.methods[name] = func;
    };
  }