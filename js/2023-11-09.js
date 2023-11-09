class Class {
    static #foo = 42;
  
    static get foo() {
      return this.#foo;
    }
  }
  Class.foo; // 42