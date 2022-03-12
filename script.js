const library = document.querySelector(".library");

let books = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(name, author, pages, read) {
  books.push(new Book(name, author, pages, read));
}

function displayBooks() {
  books.forEach(addToScreen);
  
  function addToScreen(book) {
    //
  }
}
