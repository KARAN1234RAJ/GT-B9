// myModule.js
class Greeter {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}

const PI = 3.14159;

function multiply(a, b) {
  return a * b;
}

module.exports = {
  Greeter,
  PI,
  multiply,
};
