function createFruit(name, color) {
  return {
    name,
    color,

    isRipe() {
      console.log(`This ${this.name} is ripe.`);
    },

    describe() {
      console.log(`This ${this.name} is ${this.color}.`);
    },
  };
}

let apple = createFruit('Apple', 'red');
let banana = createFruit('Banana', 'yellow');
let blackberry = createFruit('Blackberry', 'black');

apple.describe();
banana.describe();
blackberry.describe();
blackberry.isRipe();