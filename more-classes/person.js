class Person {
  #age;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  #changeAge(newAge) {
    if (newAge < 0) {
      throw new RangeError('Age must be non-negative');
    } else {
      this.#age = newAge;
    }
  }

  set age(newAge) {
    this.#changeAge(newAge);
  }

  get age() {
    return this.#age;
  }

  showAge() {
    console.log(this.age);
  }
}

let person = new Person('John', 30);
person.showAge(); // 30
person.age = 5;
person.showAge(); // 5