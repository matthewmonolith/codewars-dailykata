class Person {
    constructor (name){
      this.name = name
    }
    greet(word){
      return `Hello ${word}, my name is ${this.name}`
    }
  }