function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  return this;
}

Book.prototype.stateInfo = function() {
  console.log(`Title: ${this.title},\nAuthor: ${this.author},\nYear: ${this.year}`);
};

let book1 = new Book('Neuromancer', 'William Gibson', 1984);
let book2 = new Book('Doomsday Book', 'Connie Willis', 1992);

book1.stateInfo();
book2.stateInfo();