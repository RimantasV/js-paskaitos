// object literal
// const book1 = {
//   title: "Harry Potter",
//   author: "J K Rowling",
//   year: 1995,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };
// const book2 = {
//   title: "Lord Of Rings",
//   author: "Tolkien",
//   year: 1995,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book1);
// console.log(book2.getSummary());
// console.log(book1.getSummary());

// constructor/prototype function

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  //   this.getSummary = function () {
  //     return `${this.title} was written by ${this.author} in ${this.year}`;
  //   };
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

const book11 = new Book("Harry Potter", "J K Rowling", 1995);
console.log(book11);

book11.revise(2000);

book11.pages = 300;

console.log(book11);

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);

const magazine1 = new Magazine("Magazine 1", "A.S", 2020, 2);

console.log(magazine1);

class BookClass {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

const book111 = new BookClass("Harry Potter 2", "Rowling", 1999);

console.log(book111);

class MagazineClass extends BookClass {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const magazine2 = new MagazineClass("Magazine 2", "A.Z", 2021, 3);

console.log(magazine2);

// Uzduotis

//sukurti class and constructor function

// Rectangle(width, height);

// method getArea - paskaiciuotu staciakampio plota

// susikurti keleta skirtingu objektu pagal sia klase,
// ir patikrinti ar teisingai skaiciuoja plota.
