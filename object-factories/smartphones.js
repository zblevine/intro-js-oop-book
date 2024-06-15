function createPhone(brand, model, year) {
  return {
    brand,
    model,
    year,

    checkBattery() {
      console.log(`This ${this.model} is at 75%.`);
    },

    displayInfo() {
      console.log(`This ${this.brand} ${this.model} was released in ${this.year}`);
    }
  };
}

let iphone = createPhone('Apple', 'iPhone 12', 2020);
let samsung = createPhone('Samsung', 'Galaxy S21', 2021);

iphone.checkBattery();
samsung.displayInfo();