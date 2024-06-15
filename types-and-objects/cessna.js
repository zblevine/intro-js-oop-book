let cessna = {
  fuelCapacity: 24.5,
  cruisingSpeed: 111,

  takeOff() {
    console.log('I\'m flying!');
  },

  land() {
    console.log('Ah, back on the ground!');
  },

  whoAmI() {
    console.log(`I am a Cessna 152! My fuel capacity is ${this.fuelCapacity} gallons and my cruising speed is ${this.cruisingSpeed} knots.`);
  }
};

cessna.whoAmI();
cessna.takeOff();
cessna.land();
