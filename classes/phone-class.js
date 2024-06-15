class Phone {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  checkBattery() {
    console.log(`This ${this.model} is at 75%.`);
  }

  displayInfo() {
    console.log(`This ${this.brand} ${this.model} was released in ${this.year}`);
  }
}

let iphone = new Phone('Apple', 'iPhone 12', 2020);
let samsung = new Phone('Samsung', 'Galaxy S21', 2021);

iphone.checkBattery();
samsung.displayInfo();